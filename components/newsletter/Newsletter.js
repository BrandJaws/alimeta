import React from 'react'
import Link from 'next/link'

function Newsletter() {
    return (
        <>
            <section className='Newsletter'>
                <div className='container'>
                    <h2>Subscribe Now!</h2>
                    <p>Share your details and get connected!</p>
                    <form>
                        <input type="text" className='formControl' placeholder='Enter your email address'></input>
                        <Link href='/'>
                            <a className='submitBtn'>SUBSCRIBE</a>
                        </Link>
                    </form>
                    <p>By signing up you agree to receive communications via email.<br />For more information please refer to our Privacy Policy.</p>
                </div>
            </section>
        </>
    )
}

export default Newsletter