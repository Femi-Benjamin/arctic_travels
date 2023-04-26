import React from 'react'
import "./Payment.css"
import Roll from 'react-reveal/Zoom';

const Payment = () => {
    return (
        <div className='bg-[#F8F9FC] h-[830px]'>
            <div className='md:px-[250px] text-center items-center flex justify-center md:mb-[178.69px] mb-10'>
                <Roll>
                    <div className='md:flex sm:flex-wrap pt-[75px] md:justify-between items-center'>
                        <a href="/">
                            <img src="/Nike.png" alt="Nikelogo" />
                        </a>
                        <a href="/">
                            <img src="/apple-pay-logo-svgrepo-com 1.png" alt="Nikelogo" />
                        </a>
                        <a href="/">
                            <img src="/silver-star-1-logo-svgrepo-com 1.png" alt="Nikelogo" />
                        </a>
                        <a href="/">
                            <img src="/intrax-logo-svgrepo-com 1.png" alt="Nikelogo" />
                        </a>
                        <a href="/">
                            <img src="/mastercard-2-logo-svgrepo-com 1.png" alt="Nikelogo" />
                        </a>
                    </div>
                </Roll>
            </div>

            <div className='mapp text-center px-5'>
                <Roll>
                    <h1 className='not-italic font-[600px] md:text-[40px] leading-[135%] font-bold '>Creating the best <span className='text-[#3E86F5]'>ice-cold!</span> experience <br /> you would never forget.</h1>
                    <p className='not-italic font-[400px] md:text-[24px] leading-[150%] text-[#A9A9A9] pt-[37px]'>Would you explore nature paradise in the world, find the <br /> best destination in the world with us.</p>
                    <h1 className='not-italic font-[600px] md:text-[40px] leading-[60px] text-center pt-[158px] font-bold'>View Regions available
                    </h1>
                </Roll>
            </div>
        </div>
    )
}

export default Payment