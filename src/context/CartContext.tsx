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
  type: 'weekday_lunch' | 'minimum_order';
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

  const MINIMUM_ORDER_AMOUNT = 20;

  // Check if it's weekday lunch time (Monday-Friday, 12:00-15:00)
  const isWeekdayLunchTime = (): boolean => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    
    // Monday to Friday (1-5) and between 12:00-15:00
    return day >= 1 && day <= 5 && hour >= 12 && hour < 15;
  };

  // Get subtotal (before discounts)
  const getSubtotal = (): number => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
      return total + (price * item.quantity);
    }, 0);
  };

  // Get active promotions
  const getActivePromotions = (): Promotion[] => {
    const promotions: Promotion[] = [];
    const subtotal = getSubtotal();

    // Weekday lunch promotion (10% off)
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

    // Minimum order promotion (10% off orders €60+)
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

    return promotions;
  };

  // Calculate discount amount
  const getDiscountAmount = (): number => {
    const activePromotions = getActivePromotions();
    const subtotal = getSubtotal();
    
    if (activePromotions.length === 0) return 0;
    
    // Apply the best available discount (max 10% for now)
    // If both promotions are active, still apply only 10% (not cumulative)
    const maxDiscount = Math.max(...activePromotions.map(p => p.discount));
    return (subtotal * maxDiscount) / 100;
  };

  // Get final total price (after discounts)
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    const subtotal = getSubtotal();
    const discount = getDiscountAmount();
    return subtotal - discount;
  };

  const isMinimumOrderMet = (): boolean => {
    return getTotalPrice() >= MINIMUM_ORDER_AMOUNT;
  };

  const getMinimumOrderAmount = (): number => {
    return MINIMUM_ORDER_AMOUNT;
  };
  return (
    <CartContext.Provider value={{
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
      getMinimumOrderAmount
    }}>
      {children}
    </CartContext.Provider>
  );
};