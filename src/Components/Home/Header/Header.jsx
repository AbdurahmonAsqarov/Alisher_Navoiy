import React from 'react';
import Alisher from '../../../assets/Alisher_Navoiy.jpg';

const Header = () => {
  return (
    <div className='container pt-[80px] bg-[#2d303f] '>
      <div className='mt-5 ml-5 line2'>
        <img src={Alisher} alt="" className='rounded-lg border-2 border-[#af8b67] ' />
        <div className=''>
          <h1 className='text-5xl  text-[#af7b67] pt-[10px]'>
            Alisher Navoiy
          </h1>
          <h2 className='text-3xl text-[#af7b67] py-2'>
            (1441-1501)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
