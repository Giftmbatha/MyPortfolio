import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

const timeline = [
  {
    type: "education",
    title: "Advanced Diploma in ICT: Application Development",
    organization: "Sol Plaatje University",
    period: "Feb 2025 – Dec 2025",
    description:
      "Focus on software engineering, agile methodologies, REST APIs, databases, and data structures & algorithms.",
  },
  {
    type: "education",
    title: "Diploma in ICT: Application Development",
    organization: "Sol Plaatje University",
    period: "Feb 2022 – Dec 2024",
    description:
      "Focused on programming, relational databases, algorithms, SDLC.",
  },
  {
    type: "education",
    title: "National Senior Certificate",
    organization: "Tswaing Secondary School",
    period: "Jan 2017 – Dec 2020",
    description:
      "Passed Matric With 1 Distinction, Admission to Bachelor's degree.",
  },
]

export function Experience() {
  return (
    <Card className="bg-card border-beige-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-forest-500 rounded-full" aria-hidden="true" />
          Experience & Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-beige-300" aria-hidden="true" />

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-forest-500 border-2 border-beige-100"
                  aria-hidden="true"
                />

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-beige-100 rounded-md">
                    {item.type === "education" ? (
                      <GraduationCap size={16} className="text-forest-600" />
                    ) : (
                      <Briefcase size={16} className="text-forest-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
                    </div>
                    <p className="text-forest-600 text-sm">{item.organization}</p>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
