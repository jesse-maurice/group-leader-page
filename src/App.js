import './App.css';

import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import background from './images/medium-shot-man-delivering-groceries 1.jpg';

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <div className="w-full h-screen  font-['Raleway']">
        <div className="relative w-full h-full">
          <img
            className="object-cover w-full h-full fixed top-0 left-0 z-0"
            src={background}
            alt=""
          ></img>
        </div>
        <div className="absolute inset-0 z-10">
          <Header lang={lang} setLang={setLang} />
          <Main lang={lang} setLang={setLang} />
        </div>
      </div>
    </>
  );
}

export default App;
