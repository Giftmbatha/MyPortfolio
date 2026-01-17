import Image from "next/image"
import { Github, Linkedin, Mail, Terminal } from "lucide-react"
import profilePic from "../public/profile.jpg"

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Banner */}
      <div className="h-32 sm:h-40 md:h-48 rounded-xl overflow-hidden bg-gradient-to-br from-forest-600 via-forest-500 to-forest-700 relative">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-beige-100"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 text-beige-100/40 font-mono text-xs hidden sm:block">~/portfolio</div>
      </div>

      {/* Profile section */}
      <div className="relative px-4 sm:px-6 pb-4">
        {/* Avatar */}
        <div className="absolute -top-12 sm:-top-16 left-4 sm:left-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-beige-100 bg-beige-200 overflow-hidden shadow-lg">
            <Image
              src={profilePic}
              alt="Gift Mbatha"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Quick links */}
        <div className="flex justify-end pt-2 gap-2">
          <a
            href="https://github.com/Giftmbatha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-beige-200 text-forest-600 hover:bg-forest-500 hover:text-beige-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/gift-mbatha-99561229a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-beige-200 text-forest-600 hover:bg-forest-500 hover:text-beige-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:giftmbatha077@gmail.com"
            className="p-2 rounded-lg bg-beige-200 text-forest-600 hover:bg-forest-500 hover:text-beige-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Name and title */}
        <div className="mt-8 sm:mt-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Gift Mbatha</h1>
          <p className="text-forest-600 font-medium mt-1">Aspiring Software Engineer</p>
          <p className="text-muted-foreground mt-2 max-w-xl text-pretty">
            I care about clarity, data flow, and predictable systems.
          </p>

          {/* CLI reference */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-beige-200 rounded-lg border border-beige-300">
            <Terminal size={14} className="text-forest-600" />
            <code className="text-xs sm:text-sm font-mono text-forest-700">pip install gift-mbatha</code>
          </div>
        </div>
      </div>
    </div>
  )
}
