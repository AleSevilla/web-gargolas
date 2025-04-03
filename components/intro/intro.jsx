import React from 'react';

function Introduccion(props) {
    return (
       
         <section className="h-screen flex flex-col items-center  p-5 "> 

            Introduccion    

             <div className="bg-red-300 w-full flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg ">
           
            <div className="flex-1 md:text-left mb-4 md:mb-0">
                 
                 <h2 >Sobre el proyecto</h2>
            
            <p>Descubriendo cada vez más lugares de gárgolas que hay en Sevilla, en diferentes zonas de la ciudad,
             decidí agruparlas todas las gárgolas de todos los diversos lugares que hay en Sevilla, para 
            darlas a conocer, así como la historia general que las engloba.</p>
           
            <p>Las gárgolas más abundantes son de tres tipos de figuras: Humanas, Animales y Seres Mitológicos; pudiendo tener mezclas de todos.
            </p>
            
           <p>Hay figuras humanas, antropomorfas, animales mitológicos y fantásticos, dragones, águilas, monstruos y demoniacos, 
            también podemos encontrar figuras grotescas y burlonas, pudiendo tener mezclas de todos o partes de ellas.
           </p>
    
    <ul>
    <li>Grifo: Cuerpo de león, cabeza y alas de águila</li>
    <li>Glycon: Forma de serpiente con cabeza humana</li> 
    <li> Hipocampo: Híbrido entre pez y caballo</li>
    <li>Basilisco: Híbrido de gallo y reptil con cola de serpiente</li>
    <li>Marbos: Forma humana con cabeza de león</li>
    </ul>
           
            </div>
            
            <img className="w-150 h-150 rounded-lg md:mr-6" src="images/catedral/_DSF9935.jpg" alt="imagen de gárgolas de Sevilla" />
            </div>            

        </section>
        
       

    );
}

export default Introduccion;