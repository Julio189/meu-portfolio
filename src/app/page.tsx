import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import HomeSection from '@/components/sections/HomeSection'
import MyServices from '@/components/sections/MyServices'
import ProjectsSection from '@/components/sections/ProjectsSection'

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <MyServices />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
