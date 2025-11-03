import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, ChevronLeft, ChevronRight, Flame, AlertCircle, Clock, ShoppingCart } from 'lucide-react';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import ComingSoonBanner from './components/ComingSoonBanner';
import Cart from './components/Cart';
import { CartProvider, useCart } from './context/CartContext';
import {
  aktionenItems,
  salateSuppenItems,
  nigiriOnigiriItems,
  bowlsItems,
  makiItems,
  insideOutRollsItems,
  springRollsItems,
  tempuraItems,
  saucenBeilagenItems,
  dessertsItems,
  getrankeItems,
  gunkansItems,
  merkurSpecial,
  MerkurBoxes
} from './data/menuData';
import CateringSection from './components/CateringSection';

function AppContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  const specialOffers = [
    {
      title: "",
      description: "",
      originalPrice: "",
      specialPrice: "",
      discount: "10%",
      image: "/special/discount_60.png?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "",
      description: "",
      originalPrice: "",
      specialPrice: "",
      discount: "10%",
      image: "/special/discount_12-15.png?auto=compress&cs=tinysrgb&w=800"
    },

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % specialOffers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + specialOffers.length) % specialOffers.length);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Category navigation data
  const categoryNavigation = [
    { name: "Aktionen", sectionId: "aktionen" },
    { name: "Menü Merkur", sectionId: "MerkurBoxes" },
    { name: "Merkur Spezial", sectionId: "mercurSpecial" },
    { name: "Salate/Suppen", sectionId: "salate-suppen" },
    { name: "Nigiri/Onigiri", sectionId: "nigiri-onigiri" },
    { name: "Bowls", sectionId: "bowls" },
    { name: "Maki", sectionId: "maki" },
    { name: "Gunkans", sectionId: "gunkans" },
    { name: "Inside out Rolls", sectionId: "inside-out-rolls" },
    { name: "Spring rolls", sectionId: "spring-rolls" },
    { name: "Tempura", sectionId: "tempura" },
    { name: "Saucen/Beilagen", sectionId: "saucen-beilagen" },
    { name: "Desserts", sectionId: "desserts" },
    { name: "Getränke", sectionId: "getranke" }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />


      {/* Content - shift left when cart is open on desktop */}
      <div className={`relative z-10 transition-all duration-300 ${
        isCartOpen ? 'md:mr-96' : ''
      }`}>
        {/* Header Section with Header Background */}
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/backgrnd_header.png')`
          }}
        >
          {/* Header overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

          {/* Header */}
          <header className="relative z-10 px-6 py-4 border-b border-red-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img className="w-[200px] h-[200px]" src="icons/logo.png" alt="" />
              </div>
              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                <div className="hidden lg:flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span className="text-gray-300">+49 15568 492187</span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://wa.me/4915568492187"
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:merkur-sushi@gmx.de"
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

              </div>
            </div>
          </header>

          {/* Special Offers Section */}
          <section className="relative z-10 py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Flame className="w-6 h-6 text-red-500" />
                      <span className="text-red-400 font-medium tracking-wider uppercase text-sm">Heiße Angebote</span>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                      Besonders
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        für dich
                      </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                      Wir haben eine große Auswahl an Sushi, die Ihnen gefallen werden, und jeder findet etwas nach seinem Geschmack. Wir sind immer für Sie da, damit Sie Ihre Lieblingsgerichte genießen können, ohne das Haus zu verlassen.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold">Wir liefern ihre Bestellung ab 20€</p>

                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold">schnelle Lieferung.</p>
                        <p className="text-sm text-gray-400"> Frische Zutaten, Geschmacksvielfalt.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Carousel */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 backdrop-blur-sm border border-red-800/30">
                    {/* Carousel Controls - Left Side */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Carousel Controls - Right Side */}
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Carousel Content */}
                    <div className="relative h-96 overflow-hidden">
                      {specialOffers.map((offer, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                            }`}
                        >
                          <div className="relative h-full">
                            <img
                              src={offer.image}
                              alt={offer.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Discount Badge */}
                            <div className="absolute top-4 left-4">
                              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                -{offer.discount} OFF
                              </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                              <p className="text-gray-300 mb-4">{offer.description}</p>
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-red-400">{offer.specialPrice}</span>
                                <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {specialOffers.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-red-500 w-6' : 'bg-white/30'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-600/20 to-pink-500/20 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Menu Sections with Product Background */}
        <div
          className="relative bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('/backgrd_product_sect.png')`
          }}
        >
          {/* Product sections overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

          {/* Food Category Icons */}
          <section className="relative z-10 py-12 px-6 border-t border-red-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-items-center">
                {categoryNavigation.map((category, index) => (
                  <button
                    key={index}
                    className="w-full max-w-[140px] px-3 py-2 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-xl border border-red-800/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105 hover:bg-red-600/30 group text-center"
                    onClick={() => scrollToSection(category.sectionId)}
                  >
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-tight block">
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Menu Sections */}
          <div id="menu" className="relative z-10">

            {/* <div id="aktionen">
              <ComingSoonBanner
                title="Aktionen"

              />
            </div> */}

            {/* <div id="aktionen">
              <MenuSection title="Aktionen" items={aktionenItems} />
            </div> */}



            <div id="MerkurBoxes">
              <MenuSection title="Menü" items={MerkurBoxes} />
            </div>
            <div id="mercurSpecial">
              <MenuSection title="Merkur Spezial" items={merkurSpecial} />
            </div>
            <div id="salate-suppen">
              <MenuSection title="Salate/Suppen" items={salateSuppenItems} />
            </div>
            <div id="nigiri-onigiri">
              <MenuSection title="Nigiri (2St.)/Onigiri (1St.)" items={nigiriOnigiriItems} />
            </div>
            <div id="bowls">
              <MenuSection title="Bowls" items={bowlsItems} />
            </div>
            <div id="maki">
              <MenuSection title="Maki (6 St.)" items={makiItems} />
            </div>
            <div id="gunkans">
              <MenuSection title="Gunkans (2St.)" items={gunkansItems} />
            </div>
            <div id="inside-out-rolls">
              <MenuSection title="Inside out Rolls (8 St.)" items={insideOutRollsItems} />
            </div>

            {/* <div id="spring-rolls">
              <ComingSoonBanner
                title="Spring rolls"
                message="Wir arbeiten an neuen Rezepten für Frühlingsrollen"
              />
            </div> */}



            {/* <div id="spring-rolls">
              <MenuSection title="Spring rolls" items={springRollsItems} />
            </div> */}



            <div id="tempura">
              <MenuSection title="Tempura (8 St.)" items={tempuraItems} />
            </div>

            <div id="desserts">
              <MenuSection title="Desserts" items={dessertsItems} />
            </div>

            <div id="saucen-beilagen">
              <MenuSection title="Saucen/Beilagen" items={saucenBeilagenItems} />
            </div>
            <div id="getranke">
              <MenuSection title="Getränke" items={getrankeItems} />
            </div>
          </div>



          {/* catering */}

          {/* <CateringSection /> */}


          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>

        </div>
      </div>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOpen={() => setIsCartOpen(true)}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;