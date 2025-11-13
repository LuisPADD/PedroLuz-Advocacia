import { CheckCircle2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExpertiseSection() {
  const credentials = [
    "Foi Professor do Curso de Direito da UEPG (Universidade Estadual de Ponta Grossa). Palestrante e professor convidado.",
    "Mestre e doutorando em Direito do Estado pela UFPR (Capes 6)",
    "Especialista em Direito Constitucional pela ABDConst",
    "Pós-Graduando em Direito Previdenciário na ESMAFE",
    "Experiência em Direito Digital e Tecnologia",
    'Dezenas de artigos publicados na área e autor do livro "Direito ao Esquecimento no Brasil", editora GEDAI, 2019',
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/pedro-teaching.jpg"
                alt="Dr. Pedro lecionando na UEPG"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              Formação Acadêmica e <span className="text-secondary">Experiência Profissional</span>
            </h2>

            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Formação acadêmica sólida e experiência em consultoria jurídica para empresas de tecnologia, startups e
              órgãos públicos.
            </p>

            <ul className="space-y-3">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{credential}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild size="lg" variant="secondary" className="gap-2 cursor-pointer">
                <a
                  href="https://gedai.ufpr.br/wp-content/uploads/2019/09/Pedro-Luz_NOVO_miolo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="h-5 w-5" />
                  Ler o Livro "Direito ao Esquecimento no Brasil"
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
