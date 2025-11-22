import {
  Shield,
  Brain,
  Building2,
  Users,
  Landmark,
  GraduationCap,
  FileSearch,
  Gavel,
  ReceiptText,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Influenciadores Digitais",
      description:
        "Ações contra plataformas, contratos de parceria e gestão de reputação digital.",
    },
    {
      icon: Shield,
      title: "Governança e LGPD",
      description:
        "Adequação à LGPD, políticas de privacidade, DPO e auditoria de conformidade digital.",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description:
        "Due diligence algorítmica, compliance para IA e políticas de ética tecnológica.",
    },
    {
      icon: Building2,
      title: "Direito Digital Empresarial",
      description: (
        <>
          Contratos de software, gestão de incidentes e assessoria em e-commerce.
          <br />
          <br />
          Assessoria em estruturação para times de e-sports e empresas do ramo digital.
        </>
      ),
    },
    {
      icon: Landmark,
      title: "Direito Público Digital",
      description:
        "Governo digital, licitações de tecnologia e transparência algorítmica.",
    },
    {
      icon: GraduationCap,
      title: "Consultoria Acadêmica",
      description:
        "Cursos, palestras e pareceres técnico-jurídicos especializados.",
    },
    {
      icon: FileSearch,
      title: "Contencioso Fiscal Administrativo",
      description:
        "Defesa em autuações fiscais, impugnações e recursos administrativos perante a Receita Federal e Secretarias da Fazenda.",
    },
    {
      icon: Gavel,
      title: "Contencioso Fiscal Judicial",
      description:
        "Ações para anulação de cobranças indevidas, mandados de segurança e defesa em execuções fiscais.",
    },
    {
      icon: ReceiptText,
      title: "Recuperação de Impostos – TAX",
      description:
        "Revisão e restituição de tributos pagos indevidamente, incluindo compensações e créditos fiscais.",
    },
];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Conheça nossos serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções jurídicas especializadas para os desafios do mundo digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
