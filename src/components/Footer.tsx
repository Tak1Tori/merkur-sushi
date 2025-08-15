import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, ChevronUp} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-t from-black via-red-950/20 to-transparent border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Kosmisches Vergnügen</h3>
              <p className="text-gray-400 mb-2">Sie sind immer herzlich willkommen bei uns</p>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-lg font-semibold">+49 15568 492187</span>
              </div>
            </div>
            {/* Business Hours */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-white font-medium">Opening Hours</span>
              </div>
              <div className="text-gray-400 text-sm space-y-1 ml-8 ">
                <div className="flex justify-between">
                  <span>Montag-Freitag:</span>
                  <span>11:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag-Sonntag:</span>
                  <span>13:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zurück zum Anfang</span>
                  <ChevronUp onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='w-16 h-8 bg-red-900 rounded-lg'/>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-900/20 to-black/40 backdrop-blur-sm border border-red-800/30 rounded-2xl overflow-hidden">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.651874073815!2d13.59922!3d52.684324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9b3fa9998d29d%3A0xe5ee10a523aa868a!2zUsO8ZG5pdHplciBDaCA0LCAxNjMyMSBCZXJuYXUgYmVpIEJlcmxpbiwg0JPQtdGA0LzQsNC90LjRjw!5e0!3m2!1sru!2skz!4v1750048941421!5m2!1sru!2skz" className='w-[600px] h-[300px]' ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-900/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">水銀</span>
              </div>
              <div>
                <p className="text-white font-semibold">Merkur Sushi</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;