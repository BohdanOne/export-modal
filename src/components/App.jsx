import React, { useState } from 'react';
import ModalContainer from './modal/ModalContainer';

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div className='app'>
      <ModalContainer onModalClose={toggleModal} isOpen={isOpenModal} />
      <header>
        <h1>Export Modal recruitment task</h1>
      </header>
      <main>
        {!isOpenModal && (
          <button onClick={toggleModal}>Export Report</button>
        )}
      </main>
      <footer>© Bohdan Imiela 2020</footer>
    </div>
  );
};

export default App;
