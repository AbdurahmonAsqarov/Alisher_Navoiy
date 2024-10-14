import React, { useState } from 'react';
// import img
import book_img from '../../assets/book_story.jpg';
import hamza_img from '../../assets/hamza.png';

// icons
import { TfiAlignRight,TfiClose  } from "react-icons/tfi";

// motion
import { motion } from 'framer-motion';

const Navbar = () => {
  const [burgerIcon, setBurgerIcon] = useState(false);

  const clickBurgerIcon = () => {
    setBurgerIcon(!burgerIcon);
  };

  return (
    <>
      <div className='fixed container z-50'>
        <div className='container '>
          <nav className='flex justify-between px-[5vw] items-center bg-[#2d303f] border-b-2 border-[#af8b67]'>
            <img src={book_img} alt="Book Story" className='w-[80px]' />

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
          { burgerIcon ? (
          <div className=''>
            <div className='flex flex-col px-2 py-[2vh] text-[#af8b67] bg-[#2d303f]  gap-5 max-sm:gap-4'>
                <motion.button animate={{x:0}} className='border-2 rounded-lg border-[#af8b67] py-[1vh]' initial={{x:-1000}} transition={{delay:1}}>
                  <button className='text-3xl '>Mahzan ul-asror</button>
                </motion.button>
                <motion.button animate={{x:0}} className='border-2 rounded-lg border-[#af8b67] py-[1vh]' initial={{x:1000}} transition={{delay:1.2}}>
                  <button className='text-3xl '>Mahzan ul-asro</button>
                </motion.button>
                <motion.button animate={{x:0}} className='border-2 rounded-lg border-[#af8b67] py-[1vh]' initial={{x:-1000}} transition={{delay:1.4}}>
                  <button className='text-3xl '>Mahzan ul-asror</button>
                </motion.button>
                <motion.button animate={{x:0}} className='border-2 rounded-lg border-[#af8b67] py-[1vh]' initial={{x:1000}} transition={{delay:1.6}}>
                  <button className='text-3xl '>Mahzan ul-asror</button>
                </motion.button>
                <motion.button animate={{y:0,rotate:0}} className='border-2 rounded-lg border-[#af8b67] py-[1vh]' initial={{y:-5,rotate:20}} transition={{delay:1.8}}>
                  <button className='text-3xl '>Mahzan ul-asror</button>
                </motion.button>
            </div>
                <div className='grid place-content-center py-[9.5vh] bg-white pb-[50vh]'>
                  <img src={hamza_img} alt="" className= ''/>
                </div>
            </div>

          ) : (
            <div className='hidden'>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
