import React from 'react'
import Image from "next/image";
import CloseIcon from "../../public/images/close-icon.png";

function RequestADemoForm({ setShow, show }) {
    return (
        <>
           <div className='overlay'></div>
           <section className='modalBox'>
                <button onClick={() => setShow(false)} className='closePopup pr-4 !top-[35px] w-10 h-10'><Image className="lazyload" src={CloseIcon} width={40} height={40} alt="CloseIcon" /></button>
                <form className="bg-[#F6F6F6] shadow-md rounded-3xl px-4 sm:px-8 pt-10 pb-10 mb-4 flex flex-col max-w-lg mx-auto">
                    <h2 className='text-center w-full text-[24px] uppercase mb-8'>REQUEST A DEMO</h2>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                            Full Name
                        </label> */}
                        <input className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="company">
                            Brand/Company Name
                        </label> */}
                        <input className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Brand/Company Name" />
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                            Email
                        </label> */}
                        <input className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" required />
                    </div>
                    <div className="mb-6">
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="number">
                            Mobile/WA Number
                        </label> */}
                        <input className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Mobile/WA Number" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <button type='submit' className='ctaButtons !px-10 w-full !py-3 rounded-full !m-0 !bg-[#f00] !text-[16px] !text-[400] hover:!bg-[#000]'>Request a Demo</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default RequestADemoForm