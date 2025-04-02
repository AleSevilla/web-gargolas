
import { gargolaslist } from "@/config/gargolas";
import LinkGargola from "./link-gargolas";
function Gargolas() {
    const gargolas = gargolaslist.map(({ nombre, id, url }) => <LinkGargola key={id} url={url} nombre={nombre} />)
    return (
        <main >
            <h1>Listado de las gárgolas de Sevilla</h1>
<<<<<<< HEAD
            <ul className='pl-4 flex items.start flex-col gap-1'>
                {gargolas}
=======
            <ul className="pl-4 flex items-start flex-col gap-2">{gargolas}
>>>>>>> 36b902dab1df49b4cd0b9328bfc01b0621daf557
            </ul>
        </main>
    );
}

export default Gargolas;




