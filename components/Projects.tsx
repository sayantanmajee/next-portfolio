import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const Projects = (props: Props) => {

    const projects = [1, 2, 3, 4, 5]

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 1.5
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='heading'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>
                {/* projectCard */}
                {projects.map((project, idx) => (
                    <div key={idx} className='w-screen snap-center flex flex-shrink-0 flex-col space-y-5 items-center justify-center p-20 smd:p-44 h-[800px]'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: true }}
                            src="https://www.invensislearning.com/blog/wp-content/uploads/2016/03/free-project-management-software-696x360-1.jpg" alt="" height="10" width="10" className='h-64 w-10/12 md:w-auto object-cover' />



                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl md:text-3xl xl:text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/60'>Case Study {idx + 1} of {projects.length}:</span> Amazon Clone</h4>

                            <p className='text-base md:text-lg text-center md:text-left'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* #6B728E */}
            {/* <div className='w-full absolute top-[35%] bg-[#F7AB08]/20 left-0 h-[400px] md:h-[500px] -skew-y-12'/> */}
            <div className='w-full absolute top-[35%] bg-[#F7AB08]/20 left-0 h-[400px] md:h-[500px] skew-y-12' />
        </motion.div>
    )
}

export default Projects