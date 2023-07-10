import React from "react";

const CTAButtonsSection = () => {
    return (
        <div className="bg-[#f00] section-padding">
            <section className="container mx-auto">
                <div className='p-6 h-full flex flex-col gap-6 justify-center'>
                    <h2 className='cta-section-title text-white text-center'>Products for the<br className='sm:hidden md:block' /><span>Creator Economy</span></h2>
                    <div className='section-description text-white'></div>
                </div>
                <br />
                <br />
                <div className="cta-buttons text-center">
                    <button type="button" className="theme-btn-primary text-white hover:text-black bg-black hover:bg-white">Animeta™ Brandstar</button>
                    <button type="button" className="theme-btn-primary text-white hover:text-black bg-black hover:bg-white">Ani, your AI Creator Buddy</button>
                    <button type="button" className="theme-btn-primary text-white hover:text-black bg-black hover:bg-white">Animeta™ Starmaker</button>
                </div>
            </section>
        </div>
    )
}

export default CTAButtonsSection;