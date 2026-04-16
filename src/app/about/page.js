import React from 'react'
import Summery from '@/components/sections/summery'
import Resume from '@/components/sections/resume'
import SkillsSection from '@/components/sections/skillsSection'
import CallToAction from '@/components/sections/callToAction'

const About = () => {
    return (
        <>
            <Summery />
            <SkillsSection />
            <Resume />
            <CallToAction />
        </>
    )
}

export default About