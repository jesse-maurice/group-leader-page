import './App.css';

import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import background from './images/medium-shot-man-delivering-groceries 1.jpg';

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <div className="w-full h-screen overflow-hidden font-['Raleway']">
        <div className="relative w-full h-full">
          <img
            className="object-cover w-full h-screen transition-all"
            src={background}
            alt=""
          ></img>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Header lang={lang} setLang={setLang} />
          <Main lang={lang} setLang={setLang} />
          <Footer lang={lang} setLang={setLang} />
        </div>
      </div>
    </>
  );
}

export default App;
