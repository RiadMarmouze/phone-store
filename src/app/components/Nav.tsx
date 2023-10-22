import { hamburger,logo } from "@/assets";
import { navLinks } from "@/app/constants";

import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='max-container padding-x
                    flex justify-between items-center '>
      <a className="relative h-[46px] w-[46px]"
        href='/'>
        <Image src={logo} alt="logo" />
      </a>

      <ul className='flex-1 flex justify-end gap-16 max-lg:hidden'>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-color3'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='relative h-[25px] w-[25px] hidden max-lg:block'>
        <Image src={hamburger} alt='hamburger icon' />
      </div>
    </nav>
  );
};

export default Nav;
