import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { truncate } from 'fs'

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div 
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{
            once:true
        }}
        transition={{
            duration:1.2
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='heading'>About</h3>

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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
                src="https://media-cdn.tripadvisor.com/media/photo-p/10/d3/f9/e2/random-pics-of-the-julian_rotated_270.jpg"
                alt="Picture of the author"
                width={300}
                height={300}
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/40'>little</span> background</h4>
                <p className='text-base text-gray-300'>
                I’ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code.As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.
                </p>

            </div>
        </motion.div>
    )
}

export default About