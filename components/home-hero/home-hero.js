import React from 'react';

function HomeHero(props) {
    return (
        <header className="h-screen flex  flex-col  lg:flex-row-reverse bg-purple-500/30 py-20 herobg bg-cover bg-right-bottom" >
            <div className="flex flex-col items-start px-12  justify-center gap-12  bg-red-500/10  w-1/2 ">

                <h1 className="text-white text-6xl font-bold underline decoration-orange-500 ">
                    Gárgolas de Sevilla
                </h1>
                <p className="text-white text-2xl">
                    Recorrido por las gárgolas de Sevilla
                </p>
            </div>
            <div className="bg-blue-500/40  w-1/2">
                texto
            </div>
           
        </header>
    );
}

export default HomeHero;