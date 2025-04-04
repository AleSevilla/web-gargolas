import React from 'react';
import { Map as MapIcon, Navigation } from 'lucide-react';
export default function HomeSection3() {

  return (
    <>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            <div className="relative rounded-lg overflow-hidden shadow-xl h-[600px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-6.002893447875977%2C37.37657370886468%2C-5.986070632934571%2C37.38881295658736&amp;layer=mapnik"
                className="w-full h-full border-0"
                title="Mapa de Sevilla gotica cultural">
              </iframe>
            </div>


            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold">Ruta gargolística</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">

                  Embárcate en un viaje por el centro histórico de Sevilla,
                  donde las gárgolas centenarias vigilan eternamente la ciudad.

                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Palacio San Telmo</h3>
                    <p className="text-gray-400">
                      Edificio barroco construido entre los siglos XVII y XVIII para ser la sede de un colegio de marineros.
                      Ahora es la sede de la Junta de Andalucía.
                      Podemos ver sus gárgolas en la fachada principal.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Antigua fábrica de tabacos</h3>
                    <p className="text-gray-400">
                      Fue la sede de la primera fábrica de tabacos establecida en Europa.
                      Es el edificio industrial más importante de España del siglo XVIII.
                      Actualmente es la sede de launiversidad de Sevilla.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">Capilla Sta. María de Jesús</h3>
                    <p className="text-gray-400">
                      Edificio del estilo gótico-mudéjar tardío, situada en la puerta Jerez;
                      en la parte trasera de la capilla, podemos ver la gárgola,
                      con la peculiaridad de tener una lengua bífida de metal.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Información para visitantes</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Mejores horarios de observación: Temprano por la mañana o al final de la tarde para una iluminación óptima.</li>
                <li>• Duración recomendada: 2-3 horas para el recorrido completo.</li>
                <li>• Lleve binoculares para una observación detallada.</li>
                <li>• Visitas guiadas disponibles en la Catedral. </li>
              </ul>
            </div>

            <div className="group bg-gray-800  p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Consejos fotográficos</h3>
              <ul className="space-y-3 text-white/90">
                <li>• Usa un teleobjetivo para primeros planos.</li>
                <li>• Mejores condiciones de luz: Los días nublados reducen las sombras intensas.</li>
                <li>• Colócate en diferentes ángulos para capturar diversas expresiones.</li>
                <li>• Considera verla durante la hora dorada para una iluminación espectacular.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

