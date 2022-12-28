import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanityConfig';
import { isStringLiteralLike } from 'typescript';


type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

const Skill = ({ skill, directionLeft }: Props) => {
    return (
        <div className='flex flex-col items-center group relative cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                className='rounded-full border border-gray-500 h-14 w-14 md:h-20 md:w-20 xl:h-24 xl:w-24 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
                src={urlFor(skill?.image).url()}
            />
            <motion.div
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    x: 0,
                    opacity: 0.75
                }}
                className='absolute opacity-0 transition duration-300 ease-in-out group-hover:bg-[#50577A] h-14 w-14 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full z-0'>
                <div className='select-none flex rounded-full items-center justify-center h-full opacity-0 hover:opacity-100 transition duration-300 ease-in-out'>
                    <p className='text-xl xl:text-2xl font-bold uppercase text-[#F7AB0A] '>{`${skill.progress}%`}</p>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    x: directionLeft ? 200 : -200,
                    opacity: 0
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 2
                }}
                whileInView={{
                    x: 0,
                    opacity: 0.75
                }}
                className='hidden lg:flex text-[#c2c7e2]/60 mt-1 uppercase'>{skill.title}</motion.div>

        </div>

    )
}

export default Skill