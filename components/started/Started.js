import React, { useEffect, useState } from 'react'
import Image from "next/image";
import HeadingTxt from "../../public/images/started-heading.png";
import $ from "jquery";


function Started() {

    // const scrollToSection = (e) => {
    //     if (typeof window !== "undefined") {
    //         $('html, body').animate({
    //             scrollTop: $("#Started").offset().top
    //         }, 2000);
    //     }
    // }
    // const [width, setWidth] = useState('20%');
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.onscroll = (e) => {
    //             console.log(e, "event target");
    //             setWidth(window.scrollY)
    //         }
    //     }
    // });

    return (
        <>
            {/* <button className='NextSection test' onClick={(e) => scrollToSection(e)}><Image src={Down} alt="Down" /></button> */}
            <section className='Started' id='Started'>
                <div className=''>
                    <div className='text-center'>
                        <h2>Gain Popularity.<br />Achieve Growth.<br />Go Global.</h2>
                        <h1 id='expandable' className='desktop-only'>
                            {/* Get Starrrrred! */}
                            <Image src={HeadingTxt} alt="headingTxt" />
                        </h1>
                        <h1 className='mobile-only'>
                            <Image src={HeadingTxt} alt="headingTxt" />
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Started