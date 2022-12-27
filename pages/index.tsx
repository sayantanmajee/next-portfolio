/* eslint-disable @next/next/no-typos */
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
import type { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export default function Home({ pageInfo, experiences, skills, projects, socials, }: Props) {
  return (
    <div className='bg-[#404258] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 scroll-smooth'>
      <Head>
        <title>{pageInfo.name}</title>
      </Head>

      {/* Header */}
      <Header socials={socials}/>
      {/* Hero */}
      <section id="hero" className='snap-start py-10'>
        <Hero pageInfo= {pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className='snap-center py-10'>
        <About pageInfo= {pageInfo}/>
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center py-10'>
        <WorkExperience experiences={experiences}/>
      </section>

      {/* skills */}
      <section id="skills" className='snap-start py-10'>
        <Skills skills={skills}/>
      </section>
      {/* projects */}
      <section id="projects" className='snap-start py-10'>
        <Projects projects={projects}/>
      </section>
      {/* constact me */}
      <section id="contact" className='snap-start py-10'>
        <ContactMe pageInfo= {pageInfo}/>
      </section>

      {/* <footer className='sticky bottom-5 w-full'>
        <div className='flex items-center justify-center transition-all'>
          <Link href="#hero" className=' p-3 cursor-pointer rounded-full bg-slate-500/30 animate-pulse'>
            <ArrowUpIcon className='h-6 w-6 text-[#F7AB0A] '/>
          </Link>
        </div>
      </footer> */}
    </div >
  )
}


//fetch the data from backend

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page
    // - when a request comes in
    // - at most once every 5 seconds
    revalidate: 1,
  }
}