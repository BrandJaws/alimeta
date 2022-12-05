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
import Slider from "react-slick";

function Persons() {
    const [show, setShow] = useState(false);
    var settings = {
        dots: false,
        controls: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='gallery'>
            <section className='Persons desktop-only'>
                <div onClick={() => setShow(true)} className="category"><Image src={p1} alt="p1" /> <h2>Animals and pets</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p2} alt="p2" /> <h2>Beauty</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p3} alt="p3" /> <h2>DIY</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p4} alt="p4" /> <h2>family and parenting</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p5} alt="p5" /> <h2>fashion and lifestyle</h2></div>
            </section>
            <section className='person-content desktop-only'>
                <h2 data-aos="fade-right">Shaping the future of the creator economy</h2>
            </section>
            <section className='Persons desktop-only'>
                <div onClick={() => setShow(true)} className="category"><Image src={p6} alt="p6" /> <h2>Food</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p7} alt="p7" /> <h2>gaming</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p8} alt="p8" /> <h2>health</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p9} alt="p9" /> <h2>pranks n challenge</h2></div>
                <div onClick={() => setShow(true)} className="category"><Image src={p10} alt="p10" /> <h2>travel</h2></div>
            </section>

            <section className='mobile-only'>
                <Slider {...settings}>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p1} alt="p1" /> <h2>MOTION</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p2} alt="p2" /> <h2>FASHION</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p3} alt="p3" /> <h2>BEAUTY</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p4} alt="p4" /> <h2>GAMING</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p5} alt="p5" /> <h2>MUSIC</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p6} alt="p6" /> <h2>FITNESS</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p7} alt="p7" /> <h2>FILM</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p8} alt="p8" /> <h2>CUISINE</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p9} alt="p9" /> <h2>ART</h2></div>
                    </div>
                    <div>
                        <div onClick={() => setShow(true)} className="category"><Image src={p10} alt="p10" /> <h2>MAKE-UP</h2></div>
                    </div>
                </Slider>
            </section>
            {show && <Modal show={show} setShow={setShow} />}
        </div>
    )
}

export default Persons