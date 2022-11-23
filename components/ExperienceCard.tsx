import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px]  md:w-[500px] snap-center bg-[#474E68] px-10 md:px-5 mb-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='w-24 h-24 rounded-full xl:w-32 xl:h-32 object-cover object-center'
                src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />

            <div className='px-0 md:px-10 pb-2'>
                <h4 className='text-4xl font-light'>Software Engineer</h4>
                <p className='font-bold text-xl mt-1'>PAPAFAM</p>
                <div className='flex flex-row space-x-2 py-1'>
                    {/* tech used */}
                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />

                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />

                    <img
                        className='h-10 w-10 rounded-full'
                        src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="" />
                </div>
                <p className='uppercase py-5 text-gray-400 '>started work... - ended...</p>
                <ul className='h-72 list-disc space-y-4 text-base overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60'>
                    <li>summery points summery points summery points summery points summery points summery points summery points</li>
                    <li>summery points summery points summery points smmery points summery points summery points</li>
                    <li>summery points summery points summery points summery points summery points summery  points</li>
                    <li>summery points summ</li>
                    <li>summery points summery points summery points summery</li>
                    <li>summery points summery points summery points summery</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard