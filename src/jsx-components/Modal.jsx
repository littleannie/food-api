import React from 'react';
import { useState } from 'react';

const Modal = ( ) => {

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Hello </h2>
        <p>coucou</p>
        <div className="close-modal">
        </div>
      </div>
    </div>
  )
}

export default Modal;
