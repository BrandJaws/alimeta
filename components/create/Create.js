import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Star from "../../public/images/star-image.png";
import StarIcon from "../../public/images/button-star.png";
import Youtube from "../../public/images/youtubeIcon.png";
import Slider from "react-slick";


function Create() {
    var settings = {
        dots: false,
        controls: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className='CreateSection'>
                <div className='container'>
                    <div className='text-center text-update'>
                        <p>AniMeta is a Singapore based creator tech company focussed on creating & nurturing digital creators by helping them grow their communities & maximise their earnings across multiple social media platforms & brand integrations.</p>
                    </div>
                </div>
                <div className='container flex align-item-center justify-content-between create-flex'>
                    <div className='StarSide'>
                        <div className="starImage">
                            <Image src={Star} alt="Star" />
                        </div>
                        <Slider {...settings}>
                            <div>
                                <Image src={Youtube} alt="Youtube" />
                                <p>Followers</p>
                            </div>
                            <div>
                                <Image src={Youtube} alt="Youtube" />
                                <p>Followers</p>
                            </div>

                        </Slider>
                    </div>
                    <div className='contentSide'>
                        <h2>You Create</h2>
                        <h3>We will make you the Star</h3>
                        <p>Being Creators ourselves, we know how help creators expand & grow. We will be the wind beneath your wings as you take flight!</p>
                        <Link href='/'>
                            <a className='btn-theme'><Image src={StarIcon} alt="Stars" /> Star Maker</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create