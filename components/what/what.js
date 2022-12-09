import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Heading from "../../public/images/what-heading.png";

function What() {

    return (
        <>
            <section className='what'>
                <div className='container'>
                    <div className='text-center'>
                        <Image src={Heading}  className="lazyload" width={900} alt="Heading" />
                        <p>We offer <span>Financial Investment, Data Analytics & Business Intelligence, Content Strategy & Creative Technology, Brand, PR & Social Media Expertise</span> to our creator partners, which will ensure that they Gain Popularity & Achieve Growth.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default What