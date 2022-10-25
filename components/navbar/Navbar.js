import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import MenuIcon from "../../public/images/menuIcon.png";
import CloseIcon from "../../public/images/close-icon.png";

function Navbar() {

    const handleClick = () => {
        document.body.classList.toggle('MenuOpened');
    };

    return (
        <>
            <nav className='navbar' id='navbar'>
                <div className='navWrapp'>
                    <div className='Logo'>
                        <Link href='/'>
                            <a><Image src={Logo} /></a>
                        </Link>
                        <Link href='/'>
                            <a className='MenuToggler' onClick={handleClick}><div className='MenuImage'><Image src={MenuIcon} /></div><div className='closeImage'><Image src={CloseIcon} /></div></a>
                        </Link>
                    </div>
                    <div className='NavItems' id='NavItems'>
                        <ul>
                            <li className='submenu'>
                                <Link href='/'>
                                    <a>FOR CREATORS</a>
                                </Link>
                            </li>
                            <li className='submenu'>
                                <Link href='/'>
                                    <a>FOR MEDIA COMPANIES</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>FOR BRANDS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>CULTURE</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>BLOG</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>GET IN TOUCH</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar