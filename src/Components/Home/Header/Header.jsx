import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Alisher from '../../../assets/Alisher_Navoiy.jpg';
import AlisherImgPng from '../../../assets/AlisherImg.png';

const Header = () => {
  const [AlisherImg, setAlisherImg] = useState(false);

  const clickAlisherImg = () => {
    setAlisherImg(!AlisherImg); // Toggle the state when the image is clicked
  };

  return (
    <div className='container pt-[80px] bg-[#2d303f]'>
      <div className='mt-9 ml-5 line2'>
        {/* Motion applied directly to img, without wrapping */}
        <motion.img
          src={Alisher}
          alt="Alisher Navoiy"
          className='rounded-lg border-2 border-[#af8b67]'
          onClick={clickAlisherImg}
          // Animate based on the state (AlisherImg)
          animate={AlisherImg ? { x: 1000 } : { x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={AlisherImgPng}
          alt="Alisher Navoiy"
          className='rounded-lg border-2 border-[#af8b67] w-[300px] mt-4 absolute'
          onClick={clickAlisherImg}
          // Animate based on the state (AlisherImg)
          animate={AlisherImg ? { y: -420 } : { y: -1000 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <motion.h1 animate={{x:0}} initial={{x:-1000}} transition={{delay:1.5}}>
            <h1 className='text-5xl text-[#af7b67] pt-[10px]'>
              Alisher Navoiy
            </h1>
          </motion.h1>
          <motion.h2 animate={{x:0}} initial={{x:-1000}} transition={{delay:1.8}}>
            <h2 className='text-3xl text-[#af7b67] py-2'>
              (1441-1501)
            </h2>
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
