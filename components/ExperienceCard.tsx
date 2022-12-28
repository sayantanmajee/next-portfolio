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
        <article className='flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-[330px]  md:w-[600px] md:h-[93%] snap-center bg-[#474E68] px-5 py-3 mb-10 opacsity-70 hover:opacity-100 transition-opacity duration-200 overflow-hidden '>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='h-20 w-20 md:w-24 md:h-24 xl:w-32 xl:h-32 my-2 md:my-4 rounded-md  object-scale-down object-center'
                src={urlFor(experience?.companyImage).url()} alt="" />

            <div className='h-2/3 px-0 md:px-10 pb-2 space-y-2 md:space-y-3'>
                <h4 className='text-lg md:text-2xl font-light uppercase'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl md:text-2xl'>{experience?.companyName}</p>
                <div className='flex flex-row space-x-1 md:space-x-3'>
                    {/* tech used */}
                    {experience.technologies.map((technology) => (
                        // <div
                        // className=""
                        // >
                            <Image
                            key={technology._id}
                                className='rounded-full bg-blue-500/20 object-contain h-7 w-7 md:h-10 md:w-10'
                                src={urlFor(technology?.image).url()} alt="technology-icon"
                                width={10}
                                height={10} />
                        // </div>

                    ))}
                </div>
                <p className='uppercase text-xs md:text-base text-gray-400 '>
                    {new Date(experience.dateStarted).toDateString().slice(4)}{" "}-{" "}{experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString().slice(4)}
                </p>
                <ul className='h-3/4 md:h-[11rem] list-disc space-y-3 text-sm md:text-base overflow-y-scroll pr-3 md:pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>

                    {experience.points.map((point, idx) => (
                        <li key={idx} className={idx%2=== 0 ?"text-[#F7AB0A]" : "text-[#6cbec4]"}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard