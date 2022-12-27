import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanityConfig';
import Image from 'next/image';


type Props = {
    experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px]  md:w-[500px] snap-center bg-[#474E68] px-10 py-3 md:px-5 mb-10 opacsity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='w-24 h-24 my-4 rounded-md xl:w-32 xl:h-32 object-scale-down object-center'
                src={urlFor(experience?.companyImage).url()} alt="" />

            <div className='px-0 md:px-10 pb-2'>
                <h4 className='text-2xl font-light uppercase'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl mt-1'>{experience?.companyName}</p>
                <div className='flex flex-row space-x-1 md:space-x-3 py-2'>
                    {/* tech used */}
                    {experience.technologies.map((technology) => (
                        // <div
                        // className=""
                        // >
                            <Image
                            key={technology._id}
                                className='rounded-full bg-blue-500/20 object-contain h-10 w-10'
                                src={urlFor(technology?.image).url()} alt=""
                                width={10}
                                height={10} />
                        // </div>

                    ))}
                </div>
                <p className='uppercase py-5 text-gray-400 '>
                    {new Date(experience.dateStarted).toDateString().slice(4)}{" "}-{" "}{experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString().slice(4)}
                </p>
                <ul className='h-48 md:h-60 pb-2 list-disc space-y-4 text-base overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>

                    {experience.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard