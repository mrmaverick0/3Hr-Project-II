import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
    return <div className='fixed top-0 left-0 w-full h-full z-20 bg-[#2f2c2c]' onClick={props.onClose}/>;
  };
  
  const ModalOverlay = (props) => {
    return (
      // modal
      <div className='fixed top-14 left-[20%] w-[60%] bg-white p-4 rounded-[14px] z-30 shadow-md'>
        {/* content */}
        <div className=''>{props.children}</div>
      </div>
    );
  };
  const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal