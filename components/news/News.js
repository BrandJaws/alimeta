import React from 'react'
import Image from "next/image";
import Heading from "../../public/images/hot-heading.png";
import Blog1 from "../../public/images/blog-1.jpg";
import Blog2 from "../../public/images/blog-2.jpg";
import Blog3 from "../../public/images/blog-3.jpg";
import Slider from "react-slick";


function News() {
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
        <>
            <section className='News'>
                <div className='container'>
                    <div className='newsHeader'>
                        <div className='mobile-size-fix'>
                            <Image src={Heading} alt="Play" />
                        </div>
                        <div>
                            <h3>Get your daily dose of what&apos;s up and coming in the creator world.</h3>
                        </div>
                    </div>
                    <div className='videoList desktop-only'>
                        <div className='videoGroup' data-aos="fade-up">
                            <Image src={Blog1} alt="Play" />
                        </div>
                        <div className='videoGroup' data-aos="fade-up">
                            <Image src={Blog2} alt="Play" />
                        </div>
                        <div className='videoGroup' data-aos="fade-up">
                            <Image src={Blog3} alt="Play" />
                        </div>
                    </div>
                    <div className='mobile-only mobileS'>
                        <Slider {...settings}>
                            <div>
                                <Image src={Blog1} alt="Play" />
                            </div>
                            <div>
                                <Image src={Blog2} alt="Play" />
                            </div>
                            <div>
                                <Image src={Blog3} alt="Play" />
                            </div>
                        </Slider>
                    </div>
                    <div className='text-center bottom-heading'>
                        <h5>Be the first to know of the latest, on the creator economy.</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News