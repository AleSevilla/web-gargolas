

import { menuslist } from '@/config/menus';
import MenuLink from './menu-link';
import MenuWrapper from './menu-wrapper';
const Navbar = () => {

  const menus = menuslist.map((menu) => (
    <MenuLink key={menu.href} {...menu} />
  ))

  return (
    <nav className="fixed flex justify-between items-center inset-x-0  bg-black z-30 px-5 py-3">
      <span>logo</span>
      <div className="flex relative ">

        <MenuWrapper>
          {menus}
        </MenuWrapper>
      </div>
    </nav>
  );
};

export default Navbar;

