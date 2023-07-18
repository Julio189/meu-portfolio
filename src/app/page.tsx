'use client'
import { useState } from 'react'

import Header from '@/components/header/Header'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import HomeSection from '@/components/sections/HomeSection'
import MyServices from '@/components/sections/MyServices'
import ProjectsSection from '@/components/sections/ProjectsSection'

import useMediaQuery from '@/hooks/useMediaQuery'
import Navbar from '@/components/header/Navbar'

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('início')
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <HomeSection setSelectedPage={setSelectedPage} />
      <AboutSection setSelectedPage={setSelectedPage} />
      <MyServices />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
