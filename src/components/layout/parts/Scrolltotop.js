import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Scrolltotop = ({}) => {
        const portToggle = e => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
        };

  return (

    <div>
        <div className='scrolltotop'>
            <button onClick={portToggle} className='btn'><i class="fas fa-arrow-up"></i></button>
        </div>
    </div>
    
  );
};

export default Scrolltotop;