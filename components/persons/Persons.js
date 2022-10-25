import React, { useState } from 'react'
import Image from "next/image";
import p1 from "../../public/images/person-1.jpg";
import p2 from "../../public/images/person-2.jpg";
import p3 from "../../public/images/person-3.jpg";
import p4 from "../../public/images/person-4.jpg";
import p5 from "../../public/images/person-5.jpg";
import p6 from "../../public/images/person-6.jpg";
import p7 from "../../public/images/person-7.jpg";
import p8 from "../../public/images/person-8.jpg";
import p9 from "../../public/images/person-9.jpg";
import p10 from "../../public/images/person-10.jpg";
import Modal from '../modal/Modal';

function Persons() {
    const [show, setShow] = useState(false);
    return (
        <>
            <section className='Persons'>
                <div onClick={() => setShow(true)}><Image src={p1} /></div>
                <div onClick={() => setShow(true)}><Image src={p2} /></div>
                <div onClick={() => setShow(true)}><Image src={p3} /></div>
                <div onClick={() => setShow(true)}><Image src={p4} /></div>
                <div onClick={() => setShow(true)}><Image src={p5} /></div>
            </section>
            <section className='person-content'>
                <h2 data-aos="fade-right">Shaping the future of the creator economy</h2>
            </section>
            <section className='Persons'>
                <div onClick={() => setShow(true)}><Image src={p6} /></div>
                <div onClick={() => setShow(true)}><Image src={p7} /></div>
                <div onClick={() => setShow(true)}><Image src={p8} /></div>
                <div onClick={() => setShow(true)}><Image src={p9} /></div>
                <div onClick={() => setShow(true)}><Image src={p10} /></div>
            </section>
            {show && <Modal show={show} setShow={setShow} />}
        </>
    )
}

export default Persons