import React, { useState } from 'react'
import Image from "next/image";
import CloseIcon from "../../public/images/close-icon.png";
import useHandleChange from '../../hooks/useHandleChange';
import { validateField } from '../../utils/helper';

function RequestACallForm({ setShow }) {
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        fullname: '',
        company: '',
        email: '',
    });
    const [errors, setErrors] = useState({
        fullname: '',
        company: '',
        email: '',
    });
    const HandleChange = (e, formData, setFormData, errors, setErrors) => {
        useHandleChange(e, formData, setFormData, errors, setErrors);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const fieldNames = Object.keys(formData);
        let isValid = true;
        const updatedErrors = {};
        fieldNames.forEach((fieldName) => {
          const errorMessage = validateField(fieldName, formData[fieldName]);
          if (errorMessage) {
            updatedErrors[fieldName] = errorMessage;
            isValid = false;
          }
        });
        setErrors(updatedErrors);
        if (isValid) {
            const requestData = { Requestademo: formData };
            try {
                const response = await fetch('https://hooks.zapier.com/hooks/catch/4631356/390ug8o/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });
                if (response.ok) {
                    setStatus('Thank you for your details. Someone from the Animeta team will shortly get in touch with you.');
                } else {
                    setStatus('Error while submitting form');
                }
            } catch (error) {
                setStatus('Error sending the form data: '+ error);
            }
        }
    };
    return (
        <>
           <div className='overlay'></div>
           <section className='modalBox popupForm'>
                <button onClick={() => setShow(false)} className='closePopup pr-4 !top-[35px] w-10 h-10'><Image className="lazyload" src={CloseIcon} width={40} height={40} alt="CloseIcon" /></button>
                <form onSubmit={handleSubmit} className="bg-[#F6F6F6] shadow-md rounded-3xl px-4 sm:px-8 pt-10 pb-10 mb-4 flex flex-col max-w-lg mx-auto">
                    <h2 className='text-center w-full text-[24px] uppercase mb-8'>Register your interest</h2>
                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="fullname" 
                            name='fullname' 
                            type="text" 
                            value={formData.fullname}
                            onChange={(event) => HandleChange(event, formData, setFormData, errors, setErrors)}
                            placeholder="Full Name" />
                        <div className="error text-red-500">{errors.fullname}</div>
                    </div>
                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="company" 
                            name='company' 
                            type="text" 
                            value={formData.company}
                            onChange={(event) => HandleChange(event, formData, setFormData, errors, setErrors)}
                            placeholder="Brand/Company Name" />
                        <div className="error text-red-500">{errors.company}</div>
                    </div>
                    <div className="mb-4">
                        <input 
                            className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            name='email' 
                            value={formData.email}
                            onChange={(event) => HandleChange(event, formData, setFormData, errors, setErrors)}
                            placeholder="Email Address" />
                        <div className="error text-red-500">{errors.email}</div>
                    </div>
                    <div className="mb-6">
                        <input 
                            className="shadow appearance-none border rounded-[42px] w-full py-3.5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="number" 
                            type="number" 
                            placeholder="Mobile/WA Number" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type='submit' className='ctaButtons !px-10 w-full !py-3 rounded-full !m-0 !bg-[#f00] !text-[16px] !text-[400] hover:!bg-[#000]'>Register Interest</button>
                    </div>
                </form>
                {status && <p className='text-sky-600'>{status}</p>}
            </section>
        </>
    )
}

export default RequestACallForm