import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import FooterLogo from "../../public/images/footer-logo.png";

function Footer() {

    return (
        <>
            <section className='Footer'>
                <div className='container flex'>
                    <div className='footer-left'>
                        <h3>YOUR TIME IS NOW!</h3>
                        <p><b>GET IN TOUCH: enquiries@animeta.ai</b></p>
                        <p>ANIMETA PTE. LTD. <br />
                            (202238585K)<br />
                            9 Raffles Place #27-100 Republic Plaza<br />
                            SINGAPORE<br />
                            048619
                        </p>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer