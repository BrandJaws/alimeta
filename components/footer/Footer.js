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
    if (typeof window !== "undefined") {
        var scene = document.getElementById('scene3');
        var parallax = new Parallax(scene);
    }
    return (
        <>
            <section className='Footer'>
                <div className='container flex'>
                    <div className='footer-left'>
                        <Image src={FooterStarted} alt="FooterStarted" />
                        <div className='btn-wrapp footerBtn'>
                            <Link href='/'>
                                <a className='getTouch'>GET IN TOUCH</a>
                            </Link>
                            <div className='scene2' id='scene3'>
                                <span className='btn-shadow-3' data-depth="0.80"></span>
                            </div>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div className='LogoFooter'>
                            <Image src={FooterLogo} alt="FooterLogo" />
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
                                        <a><Image src={Facebook} alt="Facebook" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Instagram} alt="Instagram" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Linkedin} alt="Linkedin" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Twitter} alt="Twitter" /></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a><Image src={Youtube} alt="Youtube" /></a>
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