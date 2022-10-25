import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Play from "../../public/images/play-btn.png";
import Post from "../../public/images/post.jpg";

function News() {
    return (
        <>
            <section className='News'>
                <div className='container'>
                    <div className='newsHeader'>
                        <h2>What’s Hot!</h2>
                        <p>Click here to get your daily dose of the latest & most happening trends!</p>
                    </div>
                    <div className='videoList'>
                        <div className='videoGroup' data-aos="fade-up" data-aos-offset="300">
                            <video className='videoBox'>
                                <source src="https://jellysmack.com/wp-content/uploads/2022/02/ADDTL_jellysmack_longform_1920x1080_SANSattribution.mp4" type="video/mp4" />
                            </video>
                            <Link href='/'>
                                <a className='playBtn'><Image src={Play} /></a>
                            </Link>
                        </div>
                        <div className='videoGroup' data-aos="fade-up" data-aos-offset="500">
                            <video className='videoBox'>
                                <source src="https://jellysmack.com/wp-content/uploads/2022/02/ADDTL_jellysmack_longform_1920x1080_SANSattribution.mp4" type="video/mp4" />
                            </video>
                            <Link href='/'>
                                <a className='playBtn'><Image src={Play} /></a>
                            </Link>
                        </div>
                        <div className='videoGroup' data-aos="fade-up" data-aos-offset="700">
                            <video className='videoBox'>
                                <source src="https://jellysmack.com/wp-content/uploads/2022/02/ADDTL_jellysmack_longform_1920x1080_SANSattribution.mp4" type="video/mp4" />
                            </video>
                            <Link href='/'>
                                <a className='playBtn'><Image src={Play} /></a>
                            </Link>
                        </div>
                    </div>
                    <div className='newsHeader'>
                        <h2>Breaking News!</h2>
                    </div>
                    <div className='NewsPost'>
                        <div className='ImagePost'>
                            <Image src={Post} />
                        </div>
                        <div className='PostData'>
                            <Link href='/'>
                                <a>Click here </a>
                            </Link>
                            <p>to get the latest<br />news about the <span>‘Creator Economy’.</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News