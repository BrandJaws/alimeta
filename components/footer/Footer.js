import React from 'react'
import Link from 'next/link'
import Image from "next/image";
// import FooterLogo from "../../public/images/footer-logo.png";
import WhatsApp from "../../public/images/whatsapp.png";
import Email from "../../public/images/email.png";
import Phone from "../../public/images/phone-icon.png";
import AniLogo from "../../public/images/animated-logo.gif";

function Footer() {

    return (
        <>
            <section className='Footer'>
                <div className='container flex'>
                    <div className='footer-left'>
                        <h3>YOUR TIME IS NOW!</h3>
                        <p><b>GET IN TOUCH:</b></p>
                        <ul className='footer-social'>
                            <li>
                                <Link href='whatsapp://send?phone=+91 8825128683'>
                                    <Image src={WhatsApp} alt="FooterLogo" />
                                </Link>
                            </li>
                            <li>
                                <Link href='mailto:collaborations@animeta.ai'>
                                    <Image src={Email} alt="FooterLogo" />
                                </Link>
                            </li>
                            <li>
                                <Link href='tel:+91 8825128683'>
                                    <Image src={Phone} alt="FooterLogo" />
                                </Link>
                            </li>
                        </ul>
                        <p>ANIMETA PTE. LTD. <br />
                            (202238585K)<br />
                            9 Raffles Place #27-100 Republic Plaza<br />
                            SINGAPORE<br />
                            048619
                        </p>
                    </div>
                    <div className='footer-right'>
                        <div className='LogoFooter'>
                            <div className='gifLogo'></div>
                        </div>
                        {/* <div className='footerLinks'>
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
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer