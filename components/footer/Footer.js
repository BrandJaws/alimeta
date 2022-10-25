import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import FooterLogo from "../../public/images/footer-logo.png";
import Facebook from "../../public/images/facebook.jpg";
import Instagram from "../../public/images/instagram.jpg";
import Linkedin from "../../public/images/linkedin.jpg";
import Twitter from "../../public/images/twitter.jpg";
import Youtube from "../../public/images/youtube.jpg";
import FooterStarted from "../../public/images/footer-heading.png";

function Footer() {
    return (
        <>
            <section className='Footer'>
                <div className='container flex'>
                    <div className='footer-left'>
                        <Image src={FooterStarted} />
                        <Link href='/'>
                            <a className='getTouch'>GET IN TOUCH</a>
                        </Link>
                    </div>
                    <div className='footer-right'>
                        <div className='LogoFooter'>
                            <Image src={FooterLogo} />
                        </div>
                        <div className='footerLinks'>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Accessibility</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Terms of Use</a>
                                    </Link>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Jobs at ANIMETA</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Press Room</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Office Locations</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>ANIFYI</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>ANIMETAStudio</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='socialIcons'>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Facebook} /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Instagram} /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Linkedin} /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Twitter} /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Youtube} /></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer