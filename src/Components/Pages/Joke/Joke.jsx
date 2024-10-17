import React from 'react';
import { NavLink } from 'react-router-dom';

const Joke = () => {
  return (
    <div className='pt-[100px] pb-[50px] flex '>
      <NavLink to="/">
        <img
          src='https://cdn.pixabay.com/photo/2019/06/25/12/59/click-here-4298145_960_720.png'
          alt="Click Here"
          className='w-[150px] mx-auto'
        />
      </NavLink>
      
      <img
        src="https://media.tenor.com/45MVTBIR2LkAAAAM/meme-mood.gif"
        alt="Meme Button"
        className='w-[200px] mx-auto mt-4'
      />
    </div>
  );
};

export default Joke;
