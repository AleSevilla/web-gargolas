
import { gargolaslist } from "@/config/gargolas";
import LinkGargola from "./link-gargolas";
function Gargolas() {
    const gargolas = gargolaslist.map(({nombre,id,url})=><LinkGargola key={id} url={url} nombre={nombre} />)
    return (
        <main >
            <h1>Listado de gargolas</h1>
            <ul>
                {gargolas}
            </ul>
        </main>
    );
}

export default Gargolas;

