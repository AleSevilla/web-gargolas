import Link from 'next/link'

function LinkGargola({nombre,url}) {

    
    return (
        <li>
            <Link href={`/gargolas/${url}`} >{nombre} </Link> 
        </li>
    ); 
}

export default LinkGargola;