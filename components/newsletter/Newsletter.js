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
                            <div><input type="text" className="form-control" placeholder='Enter your email address'></input></div>
                            <div><input type="submit" className='btn-submit' value="SUBMIT"></input></div>
                        </form>
                        <p>By signing up you agree to receive communications via email.</p>
                        <div className='desktop-only'>
                            <Image src={Signature} alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter