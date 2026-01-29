import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  description?: string;
}

export interface Promotion {
  id: string;
  name: string;
  type: 'weekday_lunch' | 'minimum_order' | 'promo_code';
  discount: number;
  isActive: boolean;
  description: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getSubtotal: () => number;
  getActivePromotions: () => Promotion[];
  getDiscountAmount: () => number;
  isMinimumOrderMet: () => boolean;
  getMinimumOrderAmount: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  applyPromoCode: (code: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hasAddedItem, setHasAddedItem] = useState(false);
  const [promoCode, setPromoCode] = useState<string | null>(null);

  const MINIMUM_ORDER_AMOUNT = 20;

  const FREE_SUSHI_ITEM: Omit<CartItem, 'quantity'> = {
    id: 'free-maki',
    name: 'Maki Sake Kappa',
    price: '0€',
    description: '🎁 Gratis nach Promo-Code'
  };

  const isWeekdayLunchTime = (): boolean => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day >= 1 && day <= 5 && hour >= 12 && hour < 15;
  };

  const getSubtotal = (): number => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
      return total + price * item.quantity;
    }, 0);
  };

  const getActivePromotions = (): Promotion[] => {
    const promotions: Promotion[] = [];
    const subtotal = getSubtotal();

    if (isWeekdayLunchTime()) {
      promotions.push({
        id: 'weekday_lunch',
        name: 'Wochentags 12:00-15:00',
        type: 'weekday_lunch',
        discount: 10,
        isActive: true,
        description: '10% Rabatt an Wochentagen von 12:00 bis 15:00 Uhr'
      });
    }

    if (subtotal >= 60) {
      promotions.push({
        id: 'minimum_order',
        name: 'Bestellwert ab 60 €',
        type: 'minimum_order',
        discount: 10,
        isActive: true,
        description: '10 % Rabatt auf Bestellungen über 60 €'
      });
    }

    if (promoCode === 'Nikitos') {
      promotions.push({
        id: 'promo_maki',
        name: 'Promo-Code MAKI',
        type: 'promo_code',
        discount: 0,
        isActive: true,
        description: 'Gratis Maki Sake Kappa zum Auftrag 🎁'
      });
    }

    return promotions;
  };

  const getDiscountAmount = (): number => {
    const activePromotions = getActivePromotions();
    const subtotal = getSubtotal();
    if (activePromotions.length === 0) return 0;
    const maxDiscount = Math.max(...activePromotions.map(p => p.discount));
    return (subtotal * maxDiscount) / 100;
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    if (!hasAddedItem) {
      setHasAddedItem(true);
      setIsCartOpen(true);
    }
  };

  const applyPromoCode = (code: string): boolean => {
    if (code.toLowerCase().trim() !== 'nikitos') return false;

    const alreadyAdded = cartItems.some(i => i.id === FREE_SUSHI_ITEM.id);
    if (!alreadyAdded) {
      addToCart(FREE_SUSHI_ITEM);
    }

    setPromoCode('nikitos');
    return true;
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setPromoCode(null);
  };

  const getTotalPrice = () => {
    return getSubtotal() - getDiscountAmount();
  };

  const isMinimumOrderMet = (): boolean => {
    return getTotalPrice() >= MINIMUM_ORDER_AMOUNT;
  };

  const getMinimumOrderAmount = (): number => {
    return MINIMUM_ORDER_AMOUNT;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getSubtotal,
        getActivePromotions,
        getDiscountAmount,
        isMinimumOrderMet,
        getMinimumOrderAmount,
        isCartOpen,
        setIsCartOpen,
        applyPromoCode
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
