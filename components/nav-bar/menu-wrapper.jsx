"use client";

import { useState,Children,cloneElement,useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
function MenuWrapper({ children }) {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    const newMenu= Children.map(children,(child)=>{
            if(child.props.href!==pathname) return child;
            return cloneElement(child,{className:cn(child.props.className,'activo')})
    })
    useEffect(()=>{
        setOpen(false)
    },[pathname])
    return (
        <>
        
            <div className={cn('md:flex md:gap-4 uppercase md:bg-transparent md:text-sm md:relative md:inset-inherit md:flex-row', isOpen ? 'flex fixed  inset-0 top-0 bg-black/50 backdrop-blur-lg  menu-open flex flex-col gap-15 justify-center text-5xl items-center ' : 'hidden')}>
                {newMenu}
            </div>
            
            <button className='flex md:hidden z-50'><Hamburger size={22} toggled={isOpen} toggle={setOpen} /></button>
        </>
    );
}

export default MenuWrapper;