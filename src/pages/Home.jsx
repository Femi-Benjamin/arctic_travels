import React from 'react'
import './Home.css'
import HomeNav from '../navBar/HomeNav'
import BookTrip from '../components/BookTrip'
import Payment from '../components/Payment'
import Region from '../components/Region'
import Bounce from 'react-reveal/Zoom';
import Resort from '../components/Resort'
import FooterHero from '../components/FooterHero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg w-screen h-[780px]'>
    <Bounce>
        <HomeNav />
        <div className='md:px-[120px] px-[50px] mt-14'>
          <div className='justify-center items-center text-center text-white md:m-[137px]'>
            <h1 className='md:font-[700px] not-italic md:text-[56px] text-[28px] md:leading-[130px] leading-[60px] font-bold '>Plan The Perfect Winter Trip</h1>
            <p className='font-[400px] not-italic text-[22px] leading-[155%]'>Easily plan your ideal ski trip from home with the <br /> help of professionals</p>
          </div>
        </div>
    </Bounce>
        <BookTrip />
        <Payment />
        <Region />
        <Resort />
        <FooterHero />
        <Footer/>
      </div>
  )
}

export default Home
