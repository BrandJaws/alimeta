import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Star from "../../public/images/star-image.png";
import StarIcon from "../../public/images/button-star.png";
import Youtube from "../../public/images/youtubeIcon.png";
import Ticktok from "../../public/images/ticktok.png";
import Facebook from "../../public/images/facebook.png";
import Linkedin from "../../public/images/linkedin.png";
import Snapchat from "../../public/images/snapchat.png";
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

    if (typeof window !== "undefined") {
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    }

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
                                <p>Youtube</p>
                            </div>
                            <div>
                                <Image src={Ticktok} alt="Youtube" />
                                <p>TickTok</p>
                            </div>
                            <div>
                                <Image src={Facebook} alt="Youtube" />
                                <p>Facebook</p>
                            </div>
                            <div>
                                <Image src={Linkedin} alt="Youtube" />
                                <p>Linkedin</p>
                            </div>
                            <div>
                                <Image src={Snapchat} alt="Youtube" />
                                <p>Snapchat</p>
                            </div>
                        </Slider>
                    </div>
                    <div className='contentSide'>
                        <h2>You Create</h2>
                        <h3>We will make you the Star</h3>
                        <p>Being Creators ourselves, we know how help creators expand & grow. We will be the wind beneath your wings as you take flight!</p>
                        <div className='btn-wrapp'>
                            <Link href='/'>
                                <a className='btn-theme'><Image src={StarIcon} alt="Stars" /> Starmaker Program</a>
                            </Link>
                            <div className='scene' id='scene'>
                                <span className='btn-shadow' data-depth="1.00"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create