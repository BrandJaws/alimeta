import React from 'react'

const HeroScreen = () => {
    return (
        <div className='hero-section bg-black pt-[100px] min-h-screen relative'>
            <section className='container mx-auto h-full'>
                <div className='grid md:grid-cols-2 h-full items-center sm:grid-cols-1'>
                    <div className='py-6 h-full flex flex-col lg:gap-10 md:gap-8 sm:gap-6 xs:gap-4 justify-center'>
                        <h2 className='section-title text-white'>About<br /> <span>Animeta</span></h2>
                        <div className='section-description text-white text-left'>
                            <p>Animeta is a Singapore based Creator <br className="xs:hidden sm:hidden md:block" /> 
                            Tech company focused on creating & <br className="xs:hidden sm:hidden md:block" /> 
                            nurturing digital creators by helping them <br className="xs:hidden sm:hidden md:block" /> 
                            grow their communities & maximize their <br className="xs:hidden sm:hidden md:block" /> 
                            earnings across multiple social media <br className="xs:hidden sm:hidden md:block" /> 
                            platforms & customized brand solutions <br className="xs:hidden sm:hidden md:block" /> 
                            through the proprietary Animeta™ AI-based <br className="xs:hidden sm:hidden md:block" /> 
                            Creator Tech platforms.</p>
                        </div>
                    </div>
                    <div className='h-full flex flex-col gap-4 justify-center'>
                        <picture>
                            <img src="/images/v2/Animeta-Homepage.png" alt="Hero Picture" className='hero-img' />
                        </picture>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroScreen