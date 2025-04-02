"use client"
import { useState } from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
function Imagenes({galeria,imagePath}) {
      const [index, setIndex] = useState(-1);
        const images=galeria.map(({src,alt},key)=><Image
        className="w-12 md:w-6/12 lg:w-4/12 cursor-pointer" 
        
        key={src} 
        src={`/images${imagePath}/${src}`}
        
        alt={alt} 
        width={1270}
        height={720} 
        onClick={() => setIndex(key)}
        />)
    const imgLighbox=galeria.map((image)=>({src:`/images${imagePath}/${image.src}`,alt:image.alt}))
    return (
         <section>
            <div className="flex flex-row gap-2 flex-wrap justify-evenly gap-y-5">
                {images}
                </div>
                <Lightbox
                    slides={imgLighbox}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />

            </section>
            
    );
}

export default Imagenes;