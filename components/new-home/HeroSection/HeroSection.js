import React from 'react'

const HeroScreen = () => {
    return (
        <div className='hero-section bg-black pt-[100px] min-h-screen'>
            <section className='container mx-auto h-full'>
                <div className='grid grid-cols-2 h-full items-center'>
                    <div className='p-6 h-full flex flex-col gap-6 justify-center'>
                        <h2 className='section-title text-white'>About<br className='sm:hidden md:block' /> <span>Animeta</span></h2>
                        <div className='section-description text-white text-left'>
                            <p>Animeta is a Singapore based Creator<br className='sm:hidden md:block' />
                            Tech company focused on creating &<br className='sm:hidden md:block' />
                            nurturing digital creators by helping them<br className='sm:hidden md:block' />
                            grow their communities & maximize their<br className='sm:hidden md:block' />
                            earnings across multiple social media<br className='sm:hidden md:block' />
                            platforms & customized brand solutions<br className='sm:hidden md:block' />
                            through the proprietary Animeta™ AI-based<br className='sm:hidden md:block' />
                            Creator Tech platforms.</p>
                        </div>
                    </div>
                    <div className='h-full flex flex-col gap-4 justify-center'>
                        <picture>
                            <img src="/images/v2/Logo-W.png" alt="Logo" className='w-56' />
                        </picture>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroScreen