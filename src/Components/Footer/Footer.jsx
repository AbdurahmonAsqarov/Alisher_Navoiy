import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div>
      <footer className='container border-y-2 border-[#af7b67] bg-[#2d303f]'>
        <h1 className='font-medium text-2xl text-[#af7b67] my-[2vh] mr-5 text-end'>
          Mohira Ziyoqulovna <span className='italic font-thin'>uchun</span>
        </h1>
        <motion.h1 
        initial={{ x: 230 }} 
        whileInView={{ x: 0 }}
        transition={{ delay: 4 }}>
            <h1 className='ml-5 text-2xl text-[#af7b67] font-thin italic'>Us group :</h1>
        </motion.h1>

        {/* 1-qator */}
        <div className='flex justify-between mx-[20px] items-center'>
          <motion.h1
            initial={{ x: -100 }} 
            whileInView={{ x: 0 }}
            transition={{ delay: 3 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>Abdulaziz</h1>
          </motion.h1>
          <motion.h1
            initial={{ y: -115 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 2.7 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>|</h1>
          </motion.h1>
          <motion.h1
            initial={{ x: 90 }} 
            whileInView={{ x: 0 }}
            transition={{ delay: 3 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>Azizxon</h1>
          </motion.h1>
        </div>

        {/* 2-qator */}
        <div className='flex justify-between mx-[20px] items-center'>
          <motion.h1
            initial={{ y: 45 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 2 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>Bekzod</h1>
          </motion.h1>
          <motion.h1
            initial={{ y: 20 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 1 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>|</h1>
          </motion.h1>
          <motion.h1
            initial={{ y: 45 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 2 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>Daler</h1>
          </motion.h1>
        </div>

        {/* 3-qator */}
        <div className='flex justify-between mx-[20px] items-center'>
          <motion.h1
            initial={{ y: -45 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 2 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>Aziza</h1>
          </motion.h1>
          <motion.h1
            initial={{ y: -20 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 1 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>|</h1>
          </motion.h1>
          <motion.h1
            initial={{ y: -45 }} 
            whileInView={{ y: 0 }}
            transition={{ delay: 2 }}  // 1 soniya kechikish
            className='w-1/3 text-center'
          >
            <h1 className='text-2xl mt-3 text-[#af7b67]'>Farangiz</h1>
          </motion.h1>
        </div>

        <motion.h1
          initial={{ y: -145 }} 
          whileInView={{ y: 0 }}
          transition={{ delay: 2.5 }}  // 1 soniya kechikish
        >
          <h1 className='text-2xl my-5 text-[#af7b67] text-center'>Abdurahmon</h1>
        </motion.h1>
      </footer>
    </div>
  );
};

export default Footer;
