import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import { urlFor } from '../sanityConfig';
import { PageInfo } from '../typings';


type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {

    const [text, count] = useTypewriter({
        words: [`Hi, My Name's ${pageInfo?.name}`, `<${pageInfo?.role} />`, "<Tea-Lover />", "<Code-Is-Fun />"],
        loop: true,
        delaySpeed: 2000
    });


    return (
        <div
            className='h-screen flex flex-col justify-center space-y-8 text-center overflow-hidden'>
            <BackgroundCircle />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Picture of the author"
                width={500}
                height={500}
                priority
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[20px]'>{pageInfo?.role}
                </h2>
                <h1 className='text-3xl font-semibold md:text-5xl lg:text-6xl'>
                    <span className='pr-2' >{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

            </div>

            <div className='z-20 space-x-4'>
                <Link href="#about">
                    <button className='heroButton'>About</button></Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button></Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button></Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button></Link>
            </div>
        </div>
    )
}

export default Hero