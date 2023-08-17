import React from 'react'
import Image from "next/image";
import CloseIcon from "../../public/images/close-icon.png";

function RequestADemoForm({ setShow, show }) {
    return (
        <>
           <div className='overlay'></div>
           <section className='modalBox'>
                <button onClick={() => setShow(false)} className='closePopup pr-4 !top-[35px] w-10 h-10'><Image className="lazyload" src={CloseIcon} width={40} height={40} alt="CloseIcon" /></button>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                            Full Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="company">
                            Brand/Company Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Brand/Company Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="number">
                            Mobile/WA Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Mobile/WA Number" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <button type='submit' className='ctaButtons !px-6 !py-2 rounded-3xl !m-0 !bg-[#f00] !text-[16px]'>Request a Demo</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default RequestADemoForm