import React from 'react';
import Alisher from '../../assets/Alisher_Navoiy.jpg';

const Header = () => {
  return (
    <div className='container pt-[80px] bg-[#2d303f] h-[200vh] '>
      <div className='mt-5 ml-5 line2'>
        <img src={Alisher} alt="" className='rounded-lg border-2 border-[#af8b67] ' />
        <div className=''>
          <h1 className='text-5xl line text-[#af8b67] mt-[10px]'>
            Alisher Navoiy
          </h1>
          <h2 className='text-3xl text-[#af8b67] mt-2'>
            (1441-1501)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
