import { FileCheck, MessageSquare, CheckCircle2 } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Contato inicial",
      description: "Entre em contato para agendar uma consulta e apresentar sua demanda jurídica.",
    },
    {
      icon: FileCheck,
      title: "Análise do caso",
      description: "Avaliação técnica e jurídica com base na legislação vigente e jurisprudência aplicável.",
    },
    {
      icon: CheckCircle2,
      title: "Acompanhamento",
      description: "Orientação jurídica especializada com acompanhamento durante todo o processo.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-balance">
          Como funciona a consultoria jurídica
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
