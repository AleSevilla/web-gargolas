import Link from 'next/link'

function LinkGargola({nombre,url}) {

    
    return (
        <li className='bg-red-500 px-4 py-2'>
            <Link href={`/gargolas/${url}`} >{nombre} </Link> 
        </li>
    ); 
}

export default LinkGargola;

