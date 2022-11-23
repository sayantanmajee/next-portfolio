import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView= {{ opacity: 1 }}
    transition= {{ duration: 1.5 }}
    className='h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:spacey-0 mx-auto items-center'>
        <h3 className='heading'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>

        <div 
        className='grid grid-cols-4 gap-5 md:gap-7'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills