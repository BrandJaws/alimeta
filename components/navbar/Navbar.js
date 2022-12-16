import React from 'react'
import Link from 'next/link'
import Image from "next/image";
// import Logo from "https://d3e066o7tnnbih.cloudfront.net/logo.png";
// import MenuIcon from "../../public/images/menuIcon.png";
// import CloseIcon from "../../public/images/close-icon.png";

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
                            <a>
                                <img src="https://d3e066o7tnnbih.cloudfront.net/logo.png" className="lazyload" alt="Logo" height={33} width={200} />
                                {/* <Image src="https://d3e066o7tnnbih.cloudfront.net/logo.png" class="lazyload" alt="Logo" height={33} width={200} /> */}
                            </a>
                        </Link>
                        {/* <Link href='/'>
                            <a className='MenuToggler' onClick={handleClick}><div className='MenuImage'><Image src={MenuIcon} alt="MenuImage" /></div><div className='closeImage'><Image src={CloseIcon}  alt="CloseIcon" /></div></a>
                        </Link> */}
                    </div>
                    {/* <div className='NavItems' id='NavItems'>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a>ABOUT</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>CREATORS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>BRAND</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>CONTACT</a>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar