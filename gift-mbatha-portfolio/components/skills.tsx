import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Backend",
    skills: ["Python", "Node.js", "Java", "REST APIs", "GraphQL basics"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB basics", "SQL optimization"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "Docker", "Linux CLI", "Testing (pytest, Jest)", "CI/CD basics"],
  },
]

export function Skills() {
  return (
    <Card className="bg-card border-beige-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-forest-500 rounded-full" aria-hidden="true" />
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="font-medium text-forest-600 text-sm mb-3">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-forest-400 rounded-full" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
