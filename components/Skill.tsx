import React from 'react'
import { motion } from 'framer-motion'


type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                className='rounded-full border border-gray-500 h-20 w-20 xl:h-24 xl:w-24 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
                src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
            />
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    x: 0,
                    opacity: 0.75
                }}
                className='absolute opacity-0 transition duration-300 ease-in-out group-hover:bg-[#50577A] h-20 w-20 xl:h-24 xl:w-24 rounded-full z-0'>
                <div className='flex items-center justify-center h-full opacity-0 hover:opacity-100 transition duration-300 ease-in-out'>
                    <p className='text-xl xl:text-2xl font-bold uppercase text-[#F7AB0A] '>100%</p>
                </div>
            </motion.div>

        </div>

    )
}

export default Skill