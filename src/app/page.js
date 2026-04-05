import React from 'react'
import Hero from '../components/sections/hero'
import ProfileSection from '../components/sections/profileSection'
import Portfolio from '../components/sections/portfolio'
import Resume from '../components/sections/resume'
import ScrollSnap from '../components/ui/ScrollSnap'
import SkillsSection from '../components/sections/skillsSection'

const Home = () => {
    return (
        <>
            <ScrollSnap />
            <Hero />
            <ProfileSection />
            <Resume />
            <Portfolio />
            <SkillsSection />
        </>
    )
}

export default Home