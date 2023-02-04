import React, { useEffect } from 'react'
import Image from "next/image";
import Heading from "../../public/images/subscribe-heading.png";
import Signature from "../../public/images/signature.png";
import { useHubspotForm } from 'next-hubspot';

const HubspotForm = (props) => {
    useHubspotForm({
        region: props.region,
        portalId: props.portalId,
        formId: props.formId,
        target: '#hubspot-form-wrapper'
    });

    return (
        <div id="hubspot-form-wrapper" />
    )
}

function Newsletter() {
    return (
        <>
            <section className='Newsletter'>
                <div className='container'>
                    <div className='headSubs'>
                        <h2>SUBSCRIBE TO <span>GO GLOBAL.</span></h2>
                        <p>Get started on your creaTive journey,</p>
                        <p>Call us now!</p>
                    </div>
                    <div className='max-width-1000'> 
                        <HubspotForm 
                            region="na1"
                            portalId="23140983"
                            formId='87dfc11d-6610-4a0f-a5a0-09db919fec0f'
                        />  
                        
                        {/* <div className='desktop-only'>
                            <Image src={Signature} className="lazyload" alt="Logo" />
                        </div> */}
                    </div>
                    <div className='info'><p>By signing up you agree to receive communications via email.</p></div>
                </div>
            </section>
        </>
    )
}

export default Newsletter