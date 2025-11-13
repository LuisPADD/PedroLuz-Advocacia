import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const phoneNumber = "5541987149323" // Substitua pelo número real do WhatsApp
  const message = "Olá! Gostaria de saber mais sobre consultoria jurídica."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Pedro Luz - Direito Digital" width={40} height={40} />
            <div className="flex flex-col">
              <span className="text-primary-foreground font-serif text-lg font-bold leading-tight">Pedro Luz</span>
              <span className="text-primary-foreground/80 text-xs">Direito Digital</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#servicos"
              className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
            >
              Serviços
            </Link>
            <Link href="#sobre" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm">
              Sobre
            </Link>
            <Link
              href="#depoimentos"
              className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
            >
              Depoimentos
            </Link>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={whatsappUrl}>Fale Conosco</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
