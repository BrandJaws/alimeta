import React, { useState } from 'react'
import Image from "next/image";
import CloseIcon from "../../public/images/close-icon.png";


function Modal({ setShow, show }) {
    // const [show, setShow] = useState(false);
    // const handleClick = () => {
    //     document.body.classList.remove('popupOpend');
    // };
    return (
        <>
            <div className='overlay'></div>
            <section className='modalBox'>
                <button onClick={() => setShow(false)} className='closePopup'><Image src={CloseIcon} alt="CloseIcon" /></button>
                <div className='modal'>
                    <video className='Bannervideo' controls autoPlay={show} muted>
                        <source src="https://orla.ae/assets/video/video8.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
        </>
    )
}

export default Modal