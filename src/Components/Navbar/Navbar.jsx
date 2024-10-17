import React, { useState } from 'react';
// import img
import book_img from '../../assets/book_story.jpg';
import hamza_img from '../../assets/hamza.png';

// icons
import { TfiAlignRight,TfiClose  } from "react-icons/tfi";

// motion
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [burgerIcon, setBurgerIcon] = useState(false);

  const clickBurgerIcon = () => {
    setBurgerIcon(!burgerIcon);
  };

  const closeBurgerMenu = () => {
    setBurgerIcon(false); 
  };

  return (
    <>
      <div className='fixed container z-50'>
        <div className='container '>
          <nav className='flex justify-between px-[5vw] items-center bg-[#2d303f] border-b-2 border-[#af8b67]'>
            <NavLink to='/' onClick={closeBurgerMenu}>
              <img src={book_img} alt="Book Story" className='w-[80px]' />
            </NavLink>

            <motion.div
              animate={burgerIcon ? { rotate: -90, opacity: 1 } : { rotate: 0, opacity: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className='text-[25px] text-[#af8b67]'
                onClick={clickBurgerIcon}
              >
                {burgerIcon ? <TfiClose  /> : <TfiAlignRight />}
              </div>
            </motion.div>
          </nav>

          {burgerIcon ? (
            <div className=''>
              <div className='flex flex-col px-2 py-[2vh] text-[#af8b67] bg-[#2d303f] gap-5 max-sm:gap-4'>
                {burgerIcon && (
                  <motion.button
                    animate={{ x: 0 }}
                    className='border-2 rounded-lg border-[#af8b67] py-[1vh]'
                    initial={{ x: -1000 }}
                    transition={{ delay: 1 }}
                  >
                    <NavLink to='/Mahzan_ul_asror' onClick={closeBurgerMenu}>
                      <button className='text-3xl '>Mahzan ul-asror</button>
                    </NavLink>
                  </motion.button>
                )}
                <motion.button
                  animate={{ x: 0 }}
                  className='border-2 rounded-lg border-[#af8b67] py-[1vh]'
                  initial={{ x: 1000 }}
                  transition={{ delay: 1.2 }}
                >
                  <NavLink to='/Xusrav_va_Shirin' onClick={closeBurgerMenu}>
                    <button className='text-3xl '>Xusrav va Shirin</button>
                  </NavLink>
                </motion.button>
                <motion.button
                  animate={{ x: 0 }}
                  className='border-2 rounded-lg border-[#af8b67] py-[1vh]'
                  initial={{ x: -1000 }}
                  transition={{ delay: 1.4 }}
                >
                  <NavLink to='/Layli_va_Majnun' onClick={closeBurgerMenu}>
                    <button className='text-3xl '>Layli va Majnun</button>
                  </NavLink>
                </motion.button>
                <motion.button
                  animate={{ x: 0 }}
                  className='border-2 rounded-lg border-[#af8b67] py-[1vh]'
                  initial={{ x: 1000 }}
                  transition={{ delay: 1.6 }}
                >
                  <NavLink to='/Haft_paykar' onClick={closeBurgerMenu}>
                    <button className='text-3xl '>Haft paykar</button>
                  </NavLink>
                </motion.button>
                <motion.button
                  animate={{ y: 0, rotate: 0 }}
                  className='border-2 rounded-lg border-[#af8b67] py-[1vh]'
                  initial={{ y: -5, rotate: 5 }}
                  transition={{ delay: 1.8 }}
                >
                  <NavLink to='/Iskandarnoma' onClick={closeBurgerMenu}>
                    <button className='text-3xl '>Saddi Iskandariy</button>
                  </NavLink>
                </motion.button>
              </div>
              <div className='grid place-content-center py-[9.5vh] bg-white pb-[50vh]  border-8 border-[#af7b67b0]'>
                <img src={hamza_img} alt="" className=''/>
              </div>
            </div>
          ) : (
            <div className='hidden'></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
