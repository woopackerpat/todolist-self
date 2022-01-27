import React from 'react';
import './MenuItem.css'

function MenuItem(props) {
  return <li className='menu-item'>
      Menu {props.number}
  </li>;
}

export default MenuItem;
