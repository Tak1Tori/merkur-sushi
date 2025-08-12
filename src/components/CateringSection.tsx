import React from 'react';

const CateringSection: React.FC = () => {
  const cateringOptions = [
    {
      id: 1,
      title: "Catering 1",
      image: "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium sushi platter for corporate events"
    },
    {
      id: 2,
      title: "Catering 2", 
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant presentation for special occasions"
    },
    {
      id: 3,
      title: "Catering 3",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Variety pack for large gatherings"
    },
    {
      id: 4,
      title: "Catering 4",
      image: "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Traditional Japanese catering selection"
    }
  ];

  return (
    <div className="py-16 px-6 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Sushi Catering</h2>
          <p className="text-red text-lg max-w-2xl mx-auto">
            Perfect for events, parties, and corporate gatherings. Our catering options bring authentic Japanese cuisine to your special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cateringOptions.map((option) => (
            <div
              key={option.id}
              className="group relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-black/40 backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-all duration-300 hover:scale-105 hover:shadow-red-500/10"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CateringSection;