import React from 'react';
import { Skull, Cat, Bird as BirdIcon, Dog } from 'lucide-react';

export default function HomeSection3() {

  return (
    <>

    <section className="py-20  px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-red-600">Guardianes</span> de Sevilla
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div className="bg-gray-900 rounded-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/8d/ed/4b/8ded4bb893b3dfb27144d7951cf03dc1.jpg"
                alt="Demoniacas"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Demoniacas</h3>
              <p className="text-gray-400">
                Hay una gran variedad de formas. 
                se manifiesta en general a traves de figuras mostruosas, 
                incluso gastrocefalos con dos cabezas en otras partes del cuerpo
              </p>
            </div>
          </div>

          
          <div className="bg-gray-900 rounded-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://s3.abcstatics.com/abc/sevilla/media/MM/2015/11/28/s/gargolas-sevilla-9_xoptimizadax--1248x900.jpg"
                alt="Leon"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
              
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">El León</h3>
              <p className="text-gray-400">
                Representando fuerza y ​​nobleza, es el animal más representado, Se trata del rey de los animales 
                y adoptado por la iconografia cristiana, vigila la zona este de la catedral.  
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://sevillasecreta.co/wp-content/uploads/2018/10/shutterstock_1069723319-1.jpg"
                alt="Dragón"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
           
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">El dragón</h3>
              <p className="text-gray-400">
              Una criatura significativa de ser un animal vigilante, fuerte y vista muy aguda,con fuerza extraordinaria 
              hizo su uso de custodiar los templos.
              </p>
            </div>
          </div>

         
          <div className="bg-gray-900 rounded-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/aa/8c/4e/aa8c4e63c31a9144bd539881350db1be.jpg"
                alt="Antropomorfo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
             
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Antropomorfo</h3>
              <p className="text-gray-400">
               El antromorfo es el el más representado en las gárgolas, posee cabeza de hombre y cuerpo de animal,
               o viceversa
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Estas icónicas gárgolas representan la cumbre del arte gótico sevillano, 
             Cada criatura cuenta su propia historia, sirviendo tanto como prácticos drenajes de agua 
             como guardianes espirituales.
          </p>
        </div>
      </div>
    </section>
   
    </>
  );
}

