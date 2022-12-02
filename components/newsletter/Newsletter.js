import React from 'react'
import Image from "next/image";
import Heading from "../../public/images/subscribe-heading.png";
import Signature from "../../public/images/signature.png";

function Newsletter() {
    return (
        <>
            <section className='Newsletter'>
                <div className='container'>
                    <div className='headSubs'>
                        <Image src={Heading} alt="Logo" />
                        <h4>Share your details and be the first to know how to go big, with AniMeta.</h4>
                    </div>
                    <div className='max-width-1000'>
                        <form>
                            <input type="text" className="form-control" placeholder='Enter your email address'></input>
                        </form>
                        <p>By signing up you agree to receive communications via email.<br />For more information please refer to our Privacy Policy.</p>
                        <Image className='desktop-only' src={Signature} alt="Logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter