import Link from 'next/link'

function LinkGargola({nombre,url}) {

    
    return (
<<<<<<< HEAD
        <li className='bg-blue-500 px-4 py-2'>
=======
        <li className='bg-red-500 px-4 py-2'>
>>>>>>> 36b902dab1df49b4cd0b9328bfc01b0621daf557
            <Link href={`/gargolas/${url}`} >{nombre} </Link> 
        </li>
    ); 
}

export default LinkGargola;

