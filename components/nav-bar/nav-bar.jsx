import React from 'react';
import { Menu  as MenuIcon  } from 'lucide-react';

function Navbar() {
    return (
        <nav className="fixed justify-between inset-x-0 flex  p-5 bg-black/40  items-center backdrop-invert" >
          <div className="">logo</div> 
          <div className="flex gap-5 uppercase  ">
            <span>Menu 1</span>
            <span>Menu 2</span>
            <span>Menu 3</span>
            <span>Menu 4</span>
           <MenuIcon strokeWidth={3} className="text-white hover:text-red-500 cursor-pointer transition  md:hidden  " />
          </div>
        </nav>
    );
}

export default Navbar;

