import { gargolaslist } from "@/config/gargolas";
import Link from 'next/link'
async function Gargola({params}) {
    const {idgargola}= await (params)
    const gargola = gargolaslist.find(({url})=>url===idgargola)


    if (!gargola) return ( 
        <section className="flex flex-col pt-18 gap-2">
            <div>gargola no encontrada</div>    
            <Link href='/gargolas' className="mt-12" >volver atras</Link>
        </section>
    );
    const {nombre,morfologia,tipologia,localizacion,descripcion}= gargola
    return (
        <section className="flex flex-col pt-18 gap-2">
            <h1 className="text-3xl mb-2">{nombre}</h1> 
            <div>morfologia:{morfologia}</div>
            <div>tipologia:{tipologia}</div>
            <div>localizacion:{localizacion}</div>
            <div>descripcion:{descripcion}</div>
            <Link href='/gargolas' className="mt-12" >volver atras</Link>
        </section>
    );
}

export default Gargola;