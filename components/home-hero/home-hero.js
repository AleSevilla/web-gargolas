import Image from 'next/image';
import React from 'react';

function HomeHero(props) {
    return (
        <header className="relative h-screen flex  flex-col items-center md:flex-row  lg:flex-row-reverse  py-20 herobg bg-cover bg-right-bottom" >
            <Image className='absolute w-screen h-screen object-cover object-right-top -z-1' src='/images/HomeHero.jpg' width={4096} height={2752} alt="Imágen gárgolas de Sevilla" />
            <div className="flex flex-col items-start px-12  justify-center gap-12 h-full  ">

                <h1 className=" text-black w-full  text-7xl md:text-9xl font-normal underline decoration-s decoration-sevilla italianno ">
                    Gárgolas de Sevilla
                </h1>
                <p className="text-black text-xl">
                    Recorrido por las gárgolas de Sevilla
                </p>
            </div>


        </header>
    );
}

export default HomeHero;