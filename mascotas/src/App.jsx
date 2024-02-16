import React, { useState } from 'react';
import './App.css';
import Tabs from './components/tabs/Tabs';
import MenuResponsive from './components/menuresponsive/MenuResponsive';
import LoginUseContext from './components/loginUseContext/LoginUseContext';
import FocusRef from './components/ref/FocusRef';



function App() {
  
  
  
  return (
    <>
    <FocusRef/>
    <div className='app'>
    <MenuResponsive/>
    <Tabs/>
    </div>

    <div className='acceder'>
    <h1>🐶</h1>
    <LoginUseContext />
    </div>
    
    
    </>
  );
}

export default App;
