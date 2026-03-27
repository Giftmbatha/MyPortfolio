import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, Terminal } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    value: "giftmbatha077@gmail.com",
    href: "mailto:giftmbatha077@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/giftmbatha",
    href: "https://github.com/giftmbatha",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/giftmbatha",
    href: "https://www.linkedin.com/in/gift-mbatha-99561229a",
    icon: Linkedin,
  },
  {
    label: "CLI Portfolio",
    value: "pip install gift-mbatha",
    href: "#",
    icon: Terminal,
    isCli: true,
  },
]

export function Contact() {
  return (
    <Card className="bg-card border-beige-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-forest-500 rounded-full" aria-hidden="true" />
          Contact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 text-sm">
          Feel free to reach out. I'm always happy to discuss backend systems, learning resources, or potential
          opportunities.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 p-4 bg-beige-100 rounded-lg border border-beige-200 hover:border-forest-300 hover:bg-beige-50 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2"
              >
                <div className="p-2 bg-beige-200 rounded-lg group-hover:bg-forest-100 transition-colors">
                  <Icon size={18} className="text-forest-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p
                    className={`text-sm font-medium text-foreground group-hover:text-forest-600 transition-colors ${link.isCli ? "font-mono" : ""}`}
                  >
                    {link.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-beige-200 text-center">
          <p className="text-muted-foreground text-xs mt-1">© {new Date().getFullYear()} Gift Mbatha</p>
        </div>
      </CardContent>
    </Card>
  )
}
