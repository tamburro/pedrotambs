import React from 'react'
import Hero from '../components/sections/hero'
import ProfileSection from '../components/sections/profileSection'
import Portfolio from '../components/sections/portfolio'

const Home = () => {
    return (
        <>
            <Hero />
            <ProfileSection />
            <Portfolio/>
        </>
    )
}

export default Home