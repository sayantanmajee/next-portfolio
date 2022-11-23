import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className='bg-[#404258] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 '>
      <Head>
        <title>Sayantan Majee</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      {/* constact me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <footer className='sticky bottom-5 w-full'>
        <div className='flex items-center justify-center transition-all'>
          <Link href="#hero" className=' p-3 cursor-pointer rounded-full bg-slate-500/30 animate-pulse'>
            <ArrowUpIcon className='h-6 w-6 text-[#F7AB0A] '/>
          </Link>
        </div>
      </footer>
    </div >
  )
}
