import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function About() {
  return (
    <Card className="bg-card border-beige-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-forest-500 rounded-full" aria-hidden="true" />
          About
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative pl-6 border-l-2 border-forest-200">
          <Quote size={20} className="absolute -left-3 -top-1 text-forest-400 bg-card" />
          <p className="text-muted-foreground leading-relaxed italic">
            "I believe that good systems are built by people who understand that code is read far more often than it's
            written."
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-foreground text-sm mb-2">What I care about</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Writing code that's easy to understand, test, and maintain. Systems that fail gracefully and recover
              predictably. Documentation that actually helps people.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground text-sm mb-2">How I approach learning</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I learn best by building small systems that focus on one concept at a time. I document my thought process
              and decisions, even when they turn out to be wrong—especially then. Mistakes are data.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground text-sm mb-2">What I value in systems</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Predictability over cleverness. Clear error messages over silent failures. Boring technology that works
              reliably. The ability to understand what went wrong and why.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
