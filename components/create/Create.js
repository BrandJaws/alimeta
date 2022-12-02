import React from 'react'
// import Link from 'next/link'
// import Image from "next/image";
// import Star from "../../public/images/star-image.png";
// import StarIcon from "../../public/images/button-star.png";
// import Youtube from "../../public/images/youtubeIcon.png";
// import Ticktok from "../../public/images/ticktok.png";
// import Facebook from "../../public/images/facebook.png";
// import Linkedin from "../../public/images/linkedin.png";
// import Snapchat from "../../public/images/snapchat.png";
// import Slider from "react-slick";


function Create() {
    // var settings = {
    //     dots: false,
    //     controls: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    // if (typeof window !== "undefined") {
    //     var scene = document.getElementById('scene');
    //     var parallax = new Parallax(scene);
    // }

    return (
        <>
            <section className='CreateSection'>
                <div className='wording'>
                <p className='desktop-only'>AniMeta is a Singapore based creator tech company focussed on creating & nurturing digital creators by helping them grow their communities & maximise their earnings across multiple social media platforms & brand integrations.</p>
                </div>
                <p className='mobile-only'>AniMeta is a Singapore based creator tech company focussed on creating & nurturing digital creators by helping them grow their communities & maximise their earnings across multiple social media platforms & brand integrations.</p>
            </section>
        </>
    )
}

export default Create