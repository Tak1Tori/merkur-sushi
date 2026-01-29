import React from 'react';
import { X, Plus, Minus, MessageCircle, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}




const Cart: React.FC<CartProps> = ({ isOpen, onClose, onOpen }) => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getSubtotal,
    getActivePromotions,
    getDiscountAmount,
    clearCart,
    isMinimumOrderMet,
    getMinimumOrderAmount
  } = useCart();
  const { applyPromoCode } = useCart();

  const handleOrderNow = () => {
    if (cartItems.length === 0) return;

    const activePromotions = getActivePromotions();
    const subtotal = getSubtotal();
    const discount = getDiscountAmount();
    const total = getTotalPrice();

    const orderText = cartItems.map(item =>
      `${item.name} x${item.quantity} - ${item.price}`
    ).join('\n');

    let message = `Hallo! Ich möchte folgende Bestellung aufgeben:\n\n${orderText}\n\n`;

    if (activePromotions.length > 0) {
      message += `Zwischensumme: €${subtotal.toFixed(2)}\n`;
      activePromotions.forEach(promo => {
        message += `${promo.name}: -€${(subtotal * promo.discount / 100).toFixed(2)} (-${promo.discount}%)\n`;
      });
      message += `Gesamtpreis: €${total.toFixed(2)}`;
    } else {
      message += `Gesamtpreis: €${total.toFixed(2)}`;
    }

    const whatsappUrl = `https://wa.me/4915568492187?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const activePromotions = getActivePromotions();
  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const total = getTotalPrice();
  const minimumOrderMet = isMinimumOrderMet();
  const minimumAmount = getMinimumOrderAmount();
  const remainingAmount = minimumAmount - total;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay - only on mobile when expanded */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Desktop Cart Sidebar */}
      <div className={`hidden lg:block fixed right-0 top-0 h-full w-96 bg-gradient-to-b from-black to-gray-900 border-l-2 border-red-600/50 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-red-600/30">
            <h2 className="text-xl font-bold text-white">Warenkorb</h2>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-400 mt-8">
                <p>Ihr Warenkorb ist leer</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gradient-to-r from-black to-gray-800 rounded-lg p-4 border-2 border-red-600/20 hover:border-red-500/40 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {item.description && (
                      <p className="text-gray-400 text-xs mb-3">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3 h-3 text-white" />
                        </button>
                        <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3 h-3 text-white" />
                        </button>
                      </div>
                      <span className="text-red-400 font-bold">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer (Desktop) */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t-2 border-red-600/30">
              {/* Active Promotions */}
              {activePromotions.length > 0 && (
                <div className="mb-4 p-3 bg-green-600/20 border border-green-500/30 rounded-lg">
                  <h4 className="text-sm font-bold text-green-400 mb-2">🎉 Aktive Aktionen:</h4>
                  {activePromotions.map((promo) => (
                    <div key={promo.id} className="text-xs text-green-300 mb-1">
                      • {promo.description}
                    </div>
                  ))}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Zwischensumme:</span>
                  <span className="text-white">€{subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-400">Rabatt:</span>
                    <span className="text-green-400">-€{discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-red-600/30 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Gesamt:</span>
                    <span className="text-xl font-bold text-red-400">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Minimum Order Warning */}
              {cartItems.length > 0 && !minimumOrderMet && (
                <div className="mb-4 p-3 bg-orange-600/20 border border-orange-500/30 rounded-lg">
                  <h4 className="text-sm font-bold text-orange-400 mb-2">⚠️ Mindestbestellwert:</h4>
                  <div className="text-xs text-orange-300">
                    Mindestbestellwert: €{minimumAmount.toFixed(2)}
                    <br />
                    Noch €{remainingAmount.toFixed(2)} bis zum Mindestbestellwert
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Promo-Code eingeben"
                    className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const ok = applyPromoCode((e.target as HTMLInputElement).value);
                        if (!ok) alert('Ungültiger Promo-Code');
                      }
                    }}
                  />
                </div>

                <button
                  onClick={handleOrderNow}
                  disabled={!minimumOrderMet}
                  className={`w-full font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg ${minimumOrderMet
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white cursor-pointer'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  <MessageCircle className="w-5 h-5" />



                  <span>{minimumOrderMet ? 'Jetzt bestellen' : `Mindestbestellwert €${minimumAmount}`}</span>
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Warenkorb leeren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Cart */}
      <div className="lg:hidden">
        {/* Collapsed Cart Bar */}
        {!isOpen && cartItems.length > 0 && (
          <button
            onClick={onOpen}
            className="fixed bottom-0 left-0 right-0 z-50 bg-red-900 text-white px-6 py-4 flex items-center justify-between shadow-2xl"
          >
            <div className="flex items-center space-x-3">
              <Menu className="w-6 h-6" />
              <span className="font-bold text-lg">Mein Warenkorb</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-lg">€{total.toFixed(2)}</span>
              <div className="bg-white/20 rounded-full px-3 py-1">
                <span className="font-bold">{totalItems}</span>
              </div>
            </div>
          </button>
        )}

        {/* Expanded Cart Panel (MOBILE FIX) */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 to-black rounded-t-3xl transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          style={{ height: '55vh' }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex flex-col items-center py-5 border-b border-red-600/30">
              <div className="w-14 h-1 bg-gray-600 rounded-full mb-4" />
              <div className="flex items-center justify-between w-full px-6">
                <h2 className="text-2xl font-bold text-white">Warenkorb</h2>
                <button
                  onClick={onClose}
                  className="w-9 h-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-400 mt-10 text-lg">
                  <p>Ihr Warenkorb ist leer</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-gradient-to-r from-black to-gray-800 rounded-lg p-4 border border-red-600/20">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white text-base">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-9 h-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4 text-white" />
                          </button>
                          <span className="text-white font-semibold w-10 text-center text-lg">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-9 h-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4 text-white" />
                          </button>
                        </div>
                        <span className="text-red-400 font-bold text-lg">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer (увеличенные шрифты) */}
            {cartItems.length > 0 && (
              <div className="px-6 py-5 border-t border-red-600/30 bg-black/50 space-y-4">
                {activePromotions.length > 0 && (
                  <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                    <h4 className="text-base font-bold text-green-400 mb-2">🎉 Aktive Aktionen:</h4>
                    {activePromotions.map((promo) => (
                      <div key={promo.id} className="text-sm text-green-300 mb-1">
                        • {promo.description}
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-2 text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Zwischensumme:</span>
                    <span className="text-white font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-green-400">Rabatt:</span>
                      <span className="text-green-400 font-medium">-€{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-red-600/30 pt-2">
                    <span className="text-white font-semibold">Gesamt:</span>
                    <span className="text-2xl font-extrabold text-red-400">€{total.toFixed(2)}</span>
                  </div>
                </div>


                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Promo-Code"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const ok = applyPromoCode((e.target as HTMLInputElement).value);
                        if (!ok) {
                          alert('Ungültiger Promo-Code');
                        }
                      }
                    }}
                  />
                </div>

                <button
                  onClick={handleOrderNow}
                  disabled={!minimumOrderMet}
                  className={`w-full font-bold py-4 px-4 rounded-lg transition-colors flex items-center justify-center space-x-3 shadow-lg text-lg ${minimumOrderMet
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white cursor-pointer'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{minimumOrderMet ? 'Jetzt bestellen' : `Mindestbestellwert €${minimumAmount}`}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
