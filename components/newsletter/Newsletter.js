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
                        <Image src={Heading} alt="Logo" />
                        <h4>Share your details and be the first to know how to go big, with AniMeta.</h4>
                    </div>
                    <div className='max-width-1000'> 
                        <HubspotForm 
                            region="na1"
                            portalId="23140983"
                            formId='87dfc11d-6610-4a0f-a5a0-09db919fec0f'
                        />  
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