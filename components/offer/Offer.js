import React from 'react'
import Image from "next/image";
import Line from "../../public/images/heading-border.png";

function Offer() {
    return (
        <>
            <section className='Offer'>
                <div className='container'>
                    <div className='offer-text'>
                        <div className='text-center'>
                            <h2>WE'LL TAKE CARE OF EVERYTHING ELSE.</h2>
                            <Image src={Line} alt="Line" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer