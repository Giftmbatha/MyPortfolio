import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { link } from "fs"
import { ArrowUpRight, Database, Server, GitBranch } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "JobWise AI",
    purpose: "An AI-driven platform for intelligent job matching for job seekers and candidate recommendation for employers or recruiters.",
    learning: "Understanding AI integration, asynchronous programming, and building RESTful APIs",
    icon: Server,
    tags: ["Python", "FastAPI", "SQLite", "REST APIs", "AI Integration"],
    link: "https://github.com/Giftmbatha/JobWiseAI",
  },
  {
    id: 2,
    name: "Food Rescue",
    purpose: "A food donation coordination platform linking supermarkets, restaurants, and NGOs to distribute excess food",
    learning: "API Design, REST APIs, and API Planning",
    icon: GitBranch,
    tags: ["Python", "SQLite", "FastAPI", "APIs", "Endpoint Design"],
    link: "https://github.com/Giftmbatha/food-rescue",
  },
  {
    id: 3,
    name: "Library",
    purpose: "A platform to manage book inventories and track loans.",
    learning: "Data Management and Relational Databases",
    icon: Database,
    tags: ["Node.js", "Express", "MySQL"],
    link: "https://github.com/Giftmbatha/library",
  },
]

export function SystemStudies() {
  return (
    <Card className="bg-card border-beige-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-forest-500 rounded-full" aria-hidden="true" />
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 text-sm">Projects where I explored specific concepts in depth.</p>

        <div className="grid gap-4">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <a
                key={project.id}
                href={project.link}
                className="group block p-4 bg-beige-100 rounded-lg border border-beige-200 hover:border-forest-300 hover:bg-beige-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-beige-200 rounded-lg group-hover:bg-forest-100 transition-colors">
                      <Icon size={20} className="text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-forest-600 transition-colors flex items-center gap-1">
                        {project.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{project.purpose}</p>
                      <p className="text-forest-600 text-xs mt-2 font-medium">Learning: {project.learning}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 ml-11">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-beige-200 text-muted-foreground text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
