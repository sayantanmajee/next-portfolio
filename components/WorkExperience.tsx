import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'


type Props = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col text-left max-w-full px-4 md:px-10 justify-center mx-auto items-center'>
      <div className='flex flex-col items-center justify-center relative'>

        <h3 className='heading'>Experience</h3>
      </div>

      <div className='mb-5 h-3/4 md:mb-10 mt-36 md:mt-40 max-w-full flex w-auto space-x-2 md:space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>
        {/* Experience card */}
        {experiences.map((experience) => (
            <ExperienceCard key={experience?._id} experience={experience} />

          ))}
      </div>
    </motion.div>

  )
}

export default WorkExperience