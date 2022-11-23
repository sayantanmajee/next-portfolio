import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

function Header({ }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon
          url="https://youtube.com/channel/UCwlndzFHXIirsE4GSWhSbhg"
          fgColor='#c29d4e'
          bgColor='transparent' />

        <SocialIcon
          url="https://youtube.com/channel/UCwlndzFHXIirsE4GSWhSbhg"
          fgColor='#c29d4e'
          bgColor='transparent' />

        <SocialIcon
          url="https://youtube.com/channel/UCwlndzFHXIirsE4GSWhSbhg"
          fgColor='#c29d4e'
          bgColor='transparent' />

      </motion.div>
      <Link href="#contact" passHref legacyBehavior>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'>
          {/* <Link href="#contact"> */}
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='#c29d4e'
            bgColor='transparent'
          />s
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'> Get in touch</p>
          {/* </Link> */}
        </motion.div>
      </Link>
    </header>
  )
}

export default Header