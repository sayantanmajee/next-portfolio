import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center relative justify-center space-y-4'>
        <h3 className='heading top-10'>Skills</h3>
        <h3 className='flex absolute top-14 md:top-16 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Hover over a skill for proficiency</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col text-center md:text-left xl:flex-col max-w-[1500px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto space-y-10 items-center'>


        <div
          className='grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-5 pt-10 pb-2'>
          {skills.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Skills