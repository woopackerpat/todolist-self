import React from 'react';
import MenuItem from './MenuItem';
import './Sider.css'
import Footer from './Footer';

function Sider() {
  return <div className='sider-container'>
      <ul>
          <MenuItem number = {1}/>
          <MenuItem number = {2}/>
          <MenuItem number = {3}/>
          <MenuItem number = {4}/>
      </ul>
      <Footer/>
  </div>;
}

export default Sider;
