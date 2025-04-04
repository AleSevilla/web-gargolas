import React from 'react';
import {  History, Eye, CloudRain } from 'lucide-react';

export default function HomeSection1() {
  
  return (
    
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            El <span className="text-red-600">Arte</span> y el prosito
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <CloudRain className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Guardianes prácticos</h3>
              <p className="text-gray-400">
                Más allá de su temible apariencia, las gárgolas servían como drenajes esenciales,
                protegiendo la arquitectura al desviar el agua de lluvia de las paredes del edificio.  
              </p>
            </div>
            
            <div className="text-center p-6">
              <Eye className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Vigilantes espirituales</h3>
              <p className="text-gray-400">
                Se creía que estas figuras grotescas alejaban a los malos espíritus, sirviendo como guardianes protectores 
                y recordando a los creyentes la lucha constante entre el bien y el mal.
              </p>
            </div>
            
            <div className="text-center p-6">
              <History className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Legado artístico</h3>
              <p className="text-gray-400">
              Cada gárgola representa la cumbre de la artesanía medieval, combinando la necesidad arquitectónica 
              con la expresión artística que sigue cautivando a los espectadores hoy en día.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
}

