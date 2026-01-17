import { Sidebar } from "@/components/sidebar"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileOverview } from "@/components/profile-overview"
import { SystemStudies } from "@/components/system-studies"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-100">
      <Sidebar />

      <main className="ml-0 md:ml-16 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ProfileHeader />

          <div className="mt-8 space-y-8">
            <section id="profile" className="scroll-mt-8">
              <ProfileOverview />
            </section>

            <section id="system-studies" className="scroll-mt-8">
              <SystemStudies />
            </section>

            <section id="skills" className="scroll-mt-8">
              <Skills />
            </section>

            <section id="experience" className="scroll-mt-8">
              <Experience />
            </section>

            <section id="about" className="scroll-mt-8">
              <About />
            </section>

            <section id="contact" className="scroll-mt-8">
              <Contact />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
