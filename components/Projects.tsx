import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanityConfig'
import { SocialIcon } from 'react-social-icons';
import { BsFillEyeFill } from 'react-icons/bs'

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {


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
            className='h-screen flex relative overflow-hidden flex-col text-left max-w-full mx-auto items-center z-0'>
            <div className='flex flex-col items-center justify-center relative'>

                <h3 className='heading top-10'>
                    Projects
                </h3>
            </div>
            <div className='md:mt-5 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60  mb-20 md:mb-28'>
                {/* projectCard */}
                {projects.map((project, idx) => (
                    <div 
                    key={idx}
                    className='w-screen snap-center flex lg:flex-row flex-shrink-0 flex-col space-y-5 lg:space-x-10 lg:space-y-0 items-center justify-start md:justify-center p-6 pt-24 lg:p-20 smd:p-44 h-[800px]'>
                        <motion.img
                            initial={{
                                y: -200,
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
                            src={urlFor(project?.image).url()} alt="" height="10" width="10" className='h-40 lg:h-72 w-fit md:w-auto object-cover' />



                        <div className='space-y-2 lg:space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-xl md:text-2xl lg:text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/60'>{idx + 1} of {projects.length + " "}:</span>{" " + project?.title}</h4>

                            <div className='flex flex-row items-center justify-center space-x-2 md:space-x-4 bg-[#6B728E]/25 md:bg-inherit py-1 rounded-lg'>

                                {project.technologies.map((technology) => (
                                    <Image
                                        key={technology._id}
                                        src={urlFor(technology?.image).url()}
                                        alt=""
                                        className='h-7 w-7 md:h-10 md:w-10 rounded-full'
                                        height={10}
                                        width={10} />
                                ))}
                            </div>
                            <div className='flex flex-row items-center justify-center space-x-2'>
                                {/* <a
                                    href={project.linkToBuild} target="_blank"
                                    className="text-white heroButton w-[30px] h-[30px] relative
                                    hover:scale-110 p-5"
                                    rel="noreferrer"
                                    >
                                    <BsFillEyeFill className='absolute top-0 left-0 w-[100%] h-[100%] rounded-full' size={30}/>
                                </a> */}
                                <SocialIcon
                                    url={project.linkToBuild}
                                    className="heroButton hover:scale-110"
                                    fgColor='white'
                                    target="_blank"
                                    network="flickr"
                                    bgColor='transparent' />
                                <SocialIcon
                                    url={project.linkToGit}
                                    className="heroButton hover:scale-110"
                                    fgColor='white'
                                    target="_blank"
                                    bgColor='transparent' />
                            </div>

                            <p className='text-sm md:text-sm lg:text-lg text-center md:text-left line-clamp-4 lg:line-clamp-none'>
                                {project.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* #6B728E */}
            {/* <div className='w-full absolute top-[35%] bg-[#F7AB08]/20 left-0 h-[400px] md:h-[500px] -skew-y-12'/> */}
            <div className='w-full absolute top-[30%] bg-[#F7AB08]/20 left-0 h-[400px] md:h-[500px] skew-y-12' />

        </motion.div>
    )
}

export default Projects