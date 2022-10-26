import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Down from "../../public/images/down-icon.png";
import $ from "jquery";


function Started() {

    const scrollToSection = (e) => {
        if (typeof window !== "undefined") {
            $('html, body').animate({
                scrollTop: $("#Started").offset().top
            }, 2000);
        }
    }

    if (typeof window !== "undefined") {
        $(window).scroll(function () {
            var mass = Math.min(20, 1 + 0.005 * $(this).scrollTop());
            $('#expandable').css('transform', 'scale(' + mass + ')');
        });
    }

    return (
        <>
            <button className='NextSection test' onClick={(e) => scrollToSection(e)}><Image src={Down} alt="Down" /></button>
            <section className='Started' id='Started'>
                <div className=''>
                    <div className='text-center'>
                        {/* style={{ width: `${width}` }} */}
                        <h2>Gain Popularity. Achieve Growth.</h2>
                        <h1 id='expandable'>
                            Get Starrrrred!
                            {/* <Image src={HeadingTxt} width={width} alt="headingTxt" /> */}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Started