import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStartup",
      content: "Profissional competente que nos orientou na adequação à LGPD de forma clara e objetiva.",
    },
    {
      name: "João Santos",
      role: "Diretor de TI",
      content: "Consultoria especializada em IA e governança de dados. Atendimento profissional e dedicado.",
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      content: "Nos auxiliou em questões complexas de direito digital com conhecimento técnico e jurídico.",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">O que dizem nossos clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de clientes atendidos em consultoria jurídica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-secondary/30" />
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
