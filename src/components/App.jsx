import React from 'react';
import Modal from './modal';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <header>
        <h1 className='header__title'>Export Modal recruitment task</h1>
      </header>
      <main>
        <Modal />
      </main>
      <footer>
        <p className='footer__copyrights'>© <a className='footer__link' href="https://bohdanone.github.io/" alt="Go to Bohdan Imiela's Portfolio Page">Bohdan Imiela</a> 2020</p>
      </footer>
    </div>
  );
};

export default App;
