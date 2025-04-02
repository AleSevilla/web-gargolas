
import { gargolaslist } from "@/config/gargolas";
import LinkGargola from "./link-gargolas";
function Gargolas() {
    const gargolas = gargolaslist.map(({ nombre, id, url }) => <LinkGargola key={id} url={url} nombre={nombre} />)
    return (
        <main >
            <h1>Listado de las gárgolas de Sevilla</h1>
            <ul className="pl-4 flex items-start flex-col gap-2">{gargolas}
            </ul>
        </main>
    );
}

export default Gargolas;




