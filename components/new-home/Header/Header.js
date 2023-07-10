import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../../public/images/v2/Logo-W.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/router';

const  Header = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        setIsMenuShow(!isMenuShow);
    };
    useEffect(() => {
        console.log("testestset", router);
        if (isMenuShow) {
            setIsMenuShow(false);
        }
    }, [router]);

    return (
        <header>
            <nav className='fixed top-0 left-0 right-0 p-6 bg-black'>
                <div className='container mx-auto flex flex-row justify-between h-full'>
                    <div>
                        <Link href='/' className={`${router.asPath === "/" ? 'active' : ''}`}>
                            <a className='inline-flex'>
                                <Image src={Logo} fill={true} loading='lazy' alt='logo' width={200} height={43} />
                            </a>
                        </Link>
                        <button type='button' className='md:block lg:hidden' onClick={handleClick}>
                            <RxHamburgerMenu className='MenuImage' />
                        </button>
                    </div>
                    <ul className='md:hidden lg:flex flex-row gap-16 text-2xl uppercase'>
                        <li className='inline-flex'>
                            <Link href='/people' legacyBehavior>
                                <a className={`${router.asPath === "/people" ? 'active' : ''} text-white`}>People</a>
                            </Link>
                        </li>
                        <li className='inline-flex'>
                            <Link href='/news' legacyBehavior>
                                <a className={`${router.asPath === "/news" ? 'active' : ''} text-white`}>News</a>
                            </Link>
                        </li>
                    </ul>
                    {isMenuShow && (<div>
                        <ul>
                            <li>
                                <Link href='/people' legacyBehavior>
                                    <a className={`${router.asPath === "/people" ? 'active' : ''}`}>People</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/news' legacyBehavior>
                                    <a className={`${router.asPath === "/news" ? 'active' : ''}`}>News</a>
                                </Link>
                            </li>
                        </ul>
                    </div>)}
                </div>
            </nav>
        </header>
    )
}

export default Header