import React from 'react'
import "./BookTrip.css"

const BookTrip = () => {
  return (
    <div className='bg-[#F8F9FC]'>
      <div className='md:px-[120px] px-5'>
        <div className='tripp md:h-[140px] h-auto bg-slate-100 rounded-[16px] mt-[300px]'>
          <div className=''>
            <ul className='flex flex-wrap items-center md:justify-between justify-center px-[50px]'>
              <>
                <li className='p-10'>
                  <a href="/" className='flex items-center text-center mb-[17px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3E86F5" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className='ml-[15px] not-italic font-[500px] text-[16px] leading-[24px] text-[#929191]'>LOCATION</span>
                  </a>

                  <a href="/" className='flex items-center text-center'>
                    <span className='mr-[8px] not-italic font-[500px] text-[18px] leading-[27px] font-semibold'>Iceland</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666666" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </li>
              </>

              <>
                <li className=' p-10'>
                  <a href="/" className='flex items-center text-center mb-[17px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00C07B" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    <span className='ml-[15px] not-italic font-[500px] text-[16px] leading-[24px] text-[#929191]'>PERSONS</span>
                  </a>

                  <a href="/" className='flex items-center text-center'>
                    <span className='mr-[8px] not-italic font-[500px] text-[18px] leading-[27px] font-semibold'>4 Persons</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666666" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </li>
              </>

              <>
                <li className=' p-10'>
                  <a href="/" className='flex items-center text-center mb-[17px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CC0024" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>

                    <span className='ml-[15px] not-italic font-[500px] text-[16px] leading-[24px] text-[#929191]'>CHECK IN</span>
                  </a>

                  <a href="/" className='flex items-center text-center'>
                    <span className='mr-[8px] not-italic font-[500px] text-[18px] leading-[27px] font-semibold'>12 January 2022</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666666" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </li>
              </>

              <>
                <li className=' p-10'>
                  <a href="/" className='flex items-center text-center mb-[17px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CC0024" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>

                    <span className='ml-[15px] not-italic font-[500px] text-[16px] leading-[24px] text-[#929191]'>CHECK OUT</span>
                  </a>

                  <a href="/" className='flex items-center text-center'>
                    <span className='mr-[8px] not-italic font-[500px] text-[18px] leading-[27px] font-semibold'>18 January 2022</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666666" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </li>
              </>

              <>
                <button className='w-[213px] h-[64px] bg-[#3E86F5] rounded-[10px] mt-10 mb-10'>
                  <div className='flex justify-center text-center items-center gap-[12.08px]'>
                    <h1 className='not-italic font-[600px] text-[16px] leading-[24px] text-white font-semibold'>Book Trip</h1>

                    <img src="/vector.png" alt="" />
                  </div>
                </button>
              </>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookTrip