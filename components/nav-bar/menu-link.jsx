    import React from 'react';
    import Link from 'next/link';
    function MenuLink({href, title}) {
        return (
            <Link href={href} className="px-[1rem] py-[.5rem] menuhover jarkarta" data-text={title}>
                {title}
            </Link>
        );
    }
    
    export default MenuLink;