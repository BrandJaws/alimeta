import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../../public/images/v2/Logo-W.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';

const  Header = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const isScreen = useWindowSize();
    const router = useRouter();
    const handleClick = () => {
        setIsMenuShow(!isMenuShow);
    };
    useEffect(() => {
        if (isMenuShow) {
            setIsMenuShow(false);
        }
    }, [router]);

    return (
        <header>
            <nav className='sticky top-0 left-0 right-0 p-6 bg-[#181617]/[0.87] z-[999]'>
                <div className='container mx-auto flex flex-row justify-between h-full'>
                    <div className='flex flex-row justify-between items-center w-full'>
                        <Link href='/' className={`${router.asPath === "/" ? 'active' : ''}`}>
                            <a className='inline-flex'>
                                <Image src={Logo} fill={true} loading='lazy' alt='logo' width={isScreen.width < 767 ? 160 : 200} height={isScreen.width < 767 ? 34 : 43} />
                            </a>
                        </Link>
                        <button type='button' className='md:block lg:hidden' onClick={handleClick}>
                            <RxHamburgerMenu className='text-[#E6E7E8] text-2xl' />
                        </button>
                    </div>
                    <ul className='navbar lg:flex md:hidden sm:hidden xs:hidden flex-row gap-16 text-2xl uppercase'>
                        <li className='inline-flex'>
                            <Link href='/people' legacyBehavior>
                                <a className={`${router.asPath === "/people" ? 'active' : ''} text-[#E6E7E8]`}>People</a>
                            </Link>
                        </li>
                        <li className='inline-flex'>
                            <Link href='/news' legacyBehavior>
                                <a className={`${router.asPath === "/news" ? 'active' : ''} text-[#E6E7E8]`}>News</a>
                            </Link>
                        </li>
                    </ul>
                    {isMenuShow && (
                        <ul className='navbar bg-white absolute left-0 right-0 top-[91px] p-6 flex flex-col gap-4 border-b shadow-md'>
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
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header