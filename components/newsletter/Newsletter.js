import React from 'react'
import Link from 'next/link'

function Newsletter() {
    if (typeof window !== "undefined") {
        var scene = document.getElementById('scene2');
        var parallax = new Parallax(scene);
    }
    return (
        <>
            <section className='Newsletter'>
                <div className='container'>
                    <h2>Subscribe Now!</h2>
                    <p>Share your details and get connected!</p>
                    <form>
                        <input type="text" className='formControl' placeholder='Enter your email address'></input>
                        <div className='btn-wrapp width-adjust'>
                            <Link href='/'>
                                <a className='submitBtn'>SUBSCRIBE</a>
                            </Link>
                            <div className='scene' id='scene2'>
                                <span className='btn-shadow-2' data-depth="0.80"></span>
                            </div>
                        </div>
                    </form>
                    <p>By signing up you agree to receive communications via email.<br />For more information please refer to our Privacy Policy.</p>
                </div>
            </section>
        </>
    )
}

export default Newsletter