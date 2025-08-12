import React from 'react';
import { Clock, Wrench } from 'lucide-react';

interface ComingSoonBannerProps {
  title: string;
  
  message?: string;
}

const ComingSoonBanner: React.FC<ComingSoonBannerProps> = ({ 
  title, 
  
  message = "Мы работаем над улучшением этого раздела" 
}) => {
  return (
    <section className="py-16 px-6 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        
        <div className=" backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Clock className="w-8 h-8 text-red-800" />
            <Wrench className="w-8 h-8 text-red-800" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-300 mb-3">
            Demnächst verfügbar
          </h3>
          
          <p className="text-gray-400 text-base mb-4 max-w-md mx-auto">
            {message}
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-gray-700/30 border border-gray-600/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">In der Entwicklung</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonBanner;