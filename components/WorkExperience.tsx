import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    viewport={{ once:true }}
    transition={{ duration:1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center '>
      <h3 className='heading'>Experience</h3>

      <div className='flex w-full space-x-5 overflow-x-scroll pt-40 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>
        {/* Experience card */}
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        {/* Experience card */}
        {/* Experience card */}
      </div>
    </motion.div>

  )
}

export default WorkExperience