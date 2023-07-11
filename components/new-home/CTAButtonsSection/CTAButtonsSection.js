import React from "react";

const CTAButtonsSection = () => {
    return (
        <div className="bg-[#f00] section-padding">
            <section className="container mx-auto">
                <div className='lg:p-6 md:p-3 h-full flex flex-col justify-center'>
                    <h2 className='cta-section-title text-white text-center'>Products for the <br className='sm:hidden md:block' /><span>Creator Economy</span></h2>
                </div>
                <br />
                <br />
                <div className="cta-buttons text-center">
                    <button type="button" className="theme-btn-primary text-white hover:text-black bg-black hover:bg-white mb-3">Animeta™ Brandstar</button>
                    <button type="button" className="theme-btn-primary text-white hover:text-black bg-black hover:bg-white mb-3">Ani, AI Creator Buddy</button>
                    <button type="button" className="theme-btn-primary text-white hover:text-black bg-black hover:bg-white mb-3">Animeta™ Starmaker</button>
                </div>
            </section>
        </div>
    )
}

export default CTAButtonsSection;