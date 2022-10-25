import React, { useEffect, useState } from 'react'
import Image from "next/image";
import HeadingTxt from "../../public/images/started-heading.png";
import Down from "../../public/images/down-icon.png";
import $ from "jquery";


function Started() {
    const [width, setWidth] = useState('20%');
    const scrollToSection = (e) => {
        if (typeof window !== "undefined") {
            $('html, body').animate({
                scrollTop: $("#Started").offset().top
            }, 2000);
        }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = (e) => {
                console.log(e, "event target");
                setWidth(window.scrollY)
            }
        }
    });
    return (
        <>
            <button className='NextSection test' onClick={(e) => scrollToSection(e)}><Image src={Down} /></button>
            <section className='Started' id='Started'>
                <div className='container'>
                    <div className='text-center'>
                    {/* style={{ width: `${width}` }} */}
                        <h2>Gain Popularity. Achieve Growth.</h2>
                        <h1><Image src={HeadingTxt} width={width} /></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Started