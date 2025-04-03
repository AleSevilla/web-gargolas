import React from 'react';
import { ChevronDown, Shield, Castle, Building, Moon, History, Eye, CloudRain } from 'lucide-react';

export default function HomeSection3() {
  
  return (

      <footer className=" py-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-red-600" />
            <span className="text-gray-400">© 2025 </span>
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
  );
}

