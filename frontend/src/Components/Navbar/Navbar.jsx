import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import logo from "../../assets/Agri-Connect.png";
import { NavbarMenu } from "../../mockData/data";

const Logo = () => {
  return <img src={logo} alt='Agri Connect Logo' className='h-7 w-auto' />;
};

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='container flex justify-between items-center py-8'>
          {/* Logo Section */}
          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <Logo />
            <p>Agri</p>
            <p className='text-secondary'>Connect</p>
          </div>

          {/* Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className='
                    inline-block py-1 px-3 hover:text-primary font-semibold'>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Item Section */}
          <div className='flex items-center gap-4'>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <CiSearch />
            </button>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <PiShoppingCartThin />
            </button>
            <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
