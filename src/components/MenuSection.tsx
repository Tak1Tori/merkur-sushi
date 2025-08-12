import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  category?: string;
}

interface MenuSectionProps {
  title: string;
  image?: string;
  items: MenuItem[];
}

const sauceOptions = [
  { id: 'honey-mustard', name: 'Honig-Senf-Sauce', price: 0 },
  { id: 'joghurt', name: 'Joghurt-Dressing', price: 0 },
  { id: 'balzamic', name: 'Balsamico-Dressing', price: 0 },
  { id: 'noSause', name: 'ohne Dressing', price: 0 },
  
];

const MenuSection: React.FC<MenuSectionProps> = ({ title, image, items }) => {
  const { addToCart } = useCart();
  const [selectedSauces, setSelectedSauces] = useState<{[key: string]: string}>({});
  const [showSauceSelector, setShowSauceSelector] = useState<{[key: string]: boolean}>({});

   const isBowlSection = title === 'Bowls';

  const handleAddToCart = (item: MenuItem) => {
   
   if (isBowlSection) {
      const selectedSauce = selectedSauces[item.id];
      if (!selectedSauce) {
        setShowSauceSelector(prev => ({ ...prev, [item.id]: true }));
        return;
      }
      
      const sauce = sauceOptions.find(s => s.id === selectedSauce);
      const sauceName = sauce ? sauce.name : '';
      const saucePrice = sauce ? sauce.price : 0;
      const totalPrice = parseFloat(item.price.replace('€', '')) + saucePrice;
   
    addToCart({
        id: `${item.id}-${selectedSauce}`,
        name: `${item.name} + ${sauceName}`,
        price: `€${totalPrice.toFixed(2)}`,
        description: item.description
      });
      
      setShowSauceSelector(prev => ({ ...prev, [item.id]: false }));
    } else {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description
      });
    }
  };

  const handleSauceSelect = (itemId: string, sauceId: string) => {
    setSelectedSauces(prev => ({ ...prev, [itemId]: sauceId }));
    setShowSauceSelector(prev => ({ ...prev, [itemId]: false }));
  };
  return (
    <section className="py-16 px-6 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <span className="text-3xl">{image}</span>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className=" backdrop-blur-sm border-2 border-red-600/30 rounded-xl p-6 hover:border-red-500/60 transition-all duration-300 hover:scale-105 group hover:shadow-red-700/20"
            >
              {item.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-400">{item.price}</span>
                 <div className="relative">
                    {isBowlSection && showSauceSelector[item.id] && (
                      <div className="absolute bottom-12 right-0 bg-black border-2 border-red-600/50 rounded-lg p-3 min-w-48 z-20 shadow-2xl">
                        <h4 className="text-sm font-bold text-red-700 mb-2">Soße auswählen:</h4>
                        <div className="space-y-1">
                          {sauceOptions.map((sauce) => (
                            <button
                              key={sauce.id}
                              onClick={() => handleSauceSelect(item.id, sauce.id)}
                              className="w-full text-left px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-red-600/20 rounded transition-colors flex justify-between"
                            >
                              <span>{sauce.name}</span>
                              {sauce.price > 0 && <span className="text-red-400">+€{sauce.price}</span>}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowSauceSelector(prev => ({ ...prev, [item.id]: false }))}
                          className="w-full mt-2 text-xs text-gray-400 hover:text-red-400"
                        >
                          Stornierung
                        </button>
                      </div>
                    )}
                    
                    {isBowlSection && selectedSauces[item.id] && (
                      <div className="absolute bottom-12 right-0 bg-green-600/20 border border-green-500/50 rounded px-2 py-1 text-xs text-green-400 whitespace-nowrap">
                        {sauceOptions.find(s => s.id === selectedSauces[item.id])?.name}
                      </div>
                    )}
                    
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
                        isBowlSection && !selectedSauces[item.id] ? 'animate-pulse' : ''
                      }`}
                    >
                      {isBowlSection && !selectedSauces[item.id] ? (
                        <ChevronDown className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default MenuSection;