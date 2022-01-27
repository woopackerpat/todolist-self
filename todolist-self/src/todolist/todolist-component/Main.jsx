import React from 'react';
import Sider from './Sider';
import Content from './Content';
import './Main.css'

function Main() {
  return <div class = 'main-container'>
      <Sider/>
      <Content/>
  </div>;
}

export default Main;
