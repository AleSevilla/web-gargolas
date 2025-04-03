import React from 'react';

import {  Castle, Building } from 'lucide-react';
export default function HomeSection2() {
 
  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-600">Sevilla</span> Gótica
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src="http://www.jdiezarnal.com/catedraldesevillavistaaerea01.jpg"
                  alt="Catedral Sevilla"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Castle className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Santa María de la Sede</h3>
              <p className="text-gray-400">
              Con multitud de variados aspectos, siendo las primeras acorde a los cánones góticos. 
              Es el bastión de las gárgolas de Sevilla, donde más abundan y diversidad hay, 
              con guardianes arquitectónicos únicos.
              Es la catedral más grande del mundo del estilo gótico y la tercera de la cristiandad.
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">                
                <img
                  src="images/catedral/_DSF9935.jpg"
                  alt="Catedral de Sevilla"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Castle className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">La catedral de Sevilla</h3>
              <p className="text-gray-400">
              Las construidas en el periodo medieval, que poseen las típicas características de esa época. 
              Figuras con caras monstruosas que defendían ese lugar sagrado.
              A posterior del estilo gótico, insertarón las gárgolas renacentistas. 
              Dónde encontramos elementos antropomórficos, 
              algunas mezcladas con animales, otras solamente con apariencia humana.
              </p>
            </div>
          </div>
  
          <div className="mt-16 bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
             La <span className="text-red-600">Sevilla</span> Artesana
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
            Las gárgolas de Sevilla son únicas por su fusión de influencias culturales. 
            En la arquitectura gótica suele presentar figuras grotescas, 
            creando gárgolas con un diseño más elegante y geométrico. 
            No solo cumplían funciones prácticas de drenar, sino que también contaban historias del rico patrimonio multicultural de la ciudad, 
            lo que los convierte en inestimables documentos históricos tallados en piedra.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-600">Ubicaciones</span> Legendarias
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ayuntamiento_001An2022.jpg"
                  alt="Ayuntamiento de Sevilla"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Castle className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ayuntamiento de Sevilla</h3>
              <p className="text-gray-400">
              La casa consistorial construido en estilo Renacentista Plateresco (1528 -1574) 
              con su espectacular trabajo de talla de piedra por la parte trasera situado en la calle San Francisco.
              </p>
            </div>

           
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src="https://juanpedrorica.com/wp-content/uploads/2014/03/20110921135513.jpg"
                  alt="Parlamento de Andalucía"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <Castle className="absolute bottom-6 left-6 w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Parlamento de Andalucía</h3>
              <p className="text-gray-400">
               Fue el antiguo Hospital de las Cinco Llagas, fundado en el 1500. 
              Ahora es la sede del Parlamento de Andalucía. 
              Tiene muchas gárgolas en la fachada que da a los jardines y en uno de sus laterales.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

