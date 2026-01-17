import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, BookOpen, Lightbulb } from "lucide-react"

export function ProfileOverview() {
  return (
    <Card className="bg-card border-beige-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-forest-500 rounded-full" aria-hidden="true" />
          Profile Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I'm a recent graduate with a strong focus on backend development. I enjoy building systems where data flows
          predictably and errors are handled gracefully. Currently exploring how distributed systems maintain
          consistency and how to write code that other developers actually want to read.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-beige-100 rounded-lg border border-beige-200">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-forest-500" />
              <h3 className="font-medium text-foreground text-sm">Current Focus</h3>
            </div>
            <p className="text-muted-foreground text-sm">API design patterns and database optimization</p>
          </div>

          <div className="p-4 bg-beige-100 rounded-lg border border-beige-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-forest-500" />
              <h3 className="font-medium text-foreground text-sm">Learning</h3>
            </div>
            <p className="text-muted-foreground text-sm">Event-driven architecture and message queues</p>
          </div>

          <div className="p-4 bg-beige-100 rounded-lg border border-beige-200">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-forest-500" />
              <h3 className="font-medium text-foreground text-sm">Interests</h3>
            </div>
            <p className="text-muted-foreground text-sm">Clean architecture and system reliability</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
