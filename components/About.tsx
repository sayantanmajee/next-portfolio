import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { truncate } from 'fs'
import { urlFor } from '../sanityConfig'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 1.2
            }}
            className='flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center space-y-20'>
            
            <h3 className='heading'>About</h3>
            
            <div className='flex flex-col justify-center space-y-24 md:space-y-0 items-center md:flex-row'>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    className='-mb-20 md:mb-0 flex-shrink-0 xl:flex-1 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[570px] '
                    src={urlFor(pageInfo?.profilePic).url()}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                />

                <div className='space-y-10 px-0 md:px-10'>
                    <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/40'>little</span> background</h4>
                    <p className='text-base text-gray-300'>
                        {pageInfo?.backgroundInfo}
                    </p>

                </div>
            </div>
        </motion.div>
    )
}

export default About