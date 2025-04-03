import React from 'react';
import { ChevronDown, Shield, Castle, Building, Moon, History, Eye, CloudRain } from 'lucide-react';

export function HomeSection1() {
  
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <Shield className="w-20 h-20 text-red-600 mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4 tracking-tight">
            <span className="text-red-600">Gargoyles</span> of Gothic
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover the ancient guardians that have watched over our cities for centuries, 
            perched high above in silent vigilance.
          </p>
          <ChevronDown className="w-10 h-10 mx-auto animate-bounce text-red-600" />
        </div>
      </div>

      {/* Purpose Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            The <span className="text-red-600">Art</span> & Purpose
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <CloudRain className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Practical Guardians</h3>
              <p className="text-gray-400">
                Beyond their fearsome appearance, gargoyles served as essential water spouts, 
                protecting gothic architecture by directing rainwater away from the building's walls.
              </p>
            </div>
            
            <div className="text-center p-6">
              <Eye className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Spiritual Watchers</h3>
              <p className="text-gray-400">
                These grotesque figures were believed to ward off evil spirits, serving as 
                protective guardians while reminding believers of the ever-present battle between good and evil.
              </p>
            </div>
            
            <div className="text-center p-6">
              <History className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Artistic Legacy</h3>
              <p className="text-gray-400">
                Each gargoyle represents the pinnacle of medieval craftsmanship, combining 
                architectural necessity with artistic expression that continues to captivate viewers today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seville Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-600">Seville's</span> Gothic Treasures
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Seville Cathedral */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1558961166-9c584702dcb0?auto=format&fit=crop&q=80" 
                  alt="Seville Cathedral"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Castle className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Seville Cathedral</h3>
              <p className="text-gray-400">
                The world's largest Gothic cathedral features an intricate network of gargoyles, 
                each telling its own story. These medieval masterpieces combine Moorish influences 
                with Gothic traditions, creating unique architectural guardians.
              </p>
            </div>

            {/* Casa de Pilatos */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1582915730767-a5d898f3697e?auto=format&fit=crop&q=80" 
                  alt="Casa de Pilatos"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Building className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Casa de Pilatos</h3>
              <p className="text-gray-400">
                This stunning palace showcases the evolution of Sevillian architecture, where 
                Gothic gargoyles meet Renaissance design. Each creature reflects the unique 
                blend of Christian and Mudéjar artistry.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              The <span className="text-red-600">Sevillian</span> Touch
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
              Seville's gargoyles are unique in their fusion of cultural influences. While Gothic 
              architecture typically features grotesque figures, Seville's craftsmen incorporated 
              elements from Islamic art, creating gargoyles that are more elegant and geometric 
              in their design. These water spouts not only served practical purposes but also 
              told stories of the city's rich multicultural heritage, making them invaluable 
              historical documents carved in stone.
            </p>
          </div>
        </div>
      </section>

      {/* Original Locations Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-600">Legendary</span> Locations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Notre-Dame */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80" 
                  alt="Notre-Dame Cathedral"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Castle className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Notre-Dame Cathedral</h3>
              <p className="text-gray-400">
                Home to the most famous gargoyles in the world, these grotesques have guarded 
                Paris for over 800 years.
              </p>
            </div>

            {/* St. Vitus */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?auto=format&fit=crop&q=80" 
                  alt="St. Vitus Cathedral"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Building className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">St. Vitus Cathedral</h3>
              <p className="text-gray-400">
                Prague's gothic masterpiece features intricate gargoyles that blend 
                medieval craftsmanship with Czech mythology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-red-600" />
            <span className="text-gray-400">© 2025 Gargoyles of Gothic</span>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

