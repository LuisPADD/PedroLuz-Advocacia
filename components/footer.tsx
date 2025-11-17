import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Pedro Luz - Direito Digital" className="h-8 w-8 object-contain" />
              <span className="font-serif text-lg font-bold">Pedro Luz</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Advogado especialista em Direito Digital, Governança de Dados e Inteligência Artificial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#servicos" className="hover:text-secondary transition-colors">
                  Influenciadores Digitais
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-secondary transition-colors">
                  Governança e LGPD
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-secondary transition-colors">
                  Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-secondary transition-colors">
                  Direito Digital Empresarial
                </Link>
              </li>
               <li>
                <Link href="#servicos" className="hover:text-secondary transition-colors">
                  Direito Público Digital
                </Link>
              </li>
               <li>
                <Link href="#servicos" className="hover:text-secondary transition-colors">
                  Consultoria Acadêmica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#sobre" className="hover:text-secondary transition-colors">
                  Qualificações
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="hover:text-secondary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>pedrohmluz@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(42) 9 8714-9323 </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Curitiba, PR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Pedro Luz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
