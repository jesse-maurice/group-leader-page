import './App.css';

import React from 'react';

import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <>
      <div className=" px-[140px] pt-[40px] font-['Raleway'] bg-[url('https://img.freepik.com/free-photo/medium-shot-man-delivering-groceries_23-2149722269.jpg?w=1480&t=st=1688563413~exp=1688564013~hmac=1d38d8c82a2c4e5436bb0b2413706e9eee23f7f6a516dfce3fceeb9c4ed577e2')] shadow-inner brightness-90 bg-blend-darken bg-cover bg-right bg-no-repeat w-auto h-screen ">
        <Header />
        <Main/>
      
      </div>
    </>
  );
}

export default App;
