// WhatsApp SVG component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export function HeroSection() {
  const phoneNumber = "5541987149323" // Substitua pelo número real do WhatsApp
  const message = "Olá! Gostaria de saber mais sobre consultoria jurídica."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-purple-900 text-primary-foreground min-h-screen flex items-end overflow-hidden pb-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,116,139,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-screen">
          <div className="space-y-6 pb-20 relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Consultoria Jurídica e Contencioso em <span className="text-secondary">Direito Digital</span>,{" "}
              <span className="text-secondary">IA</span>, <span className="text-secondary">Governança de Dados</span> e{" "}
              <span className="text-secondary">Blockchain</span>
            </h1>

            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Advogado especialista em Direito Digital e Professor Universitário. Consultoria jurídica especializada em
              tecnologia, privacidade e inovação.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary text-secondary-foreground px-8 py-3 text-base font-sans font-semibold hover:bg-secondary/90 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar Consulta
            </a>
          </div>

          <div className="relative flex justify-center items-end w-full h-[90vh] min-h-[90vh]">
            <div className="relative h-full w-full flex items-end justify-center">
              <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full scale-110 pointer-events-none" />
              <img
                src="/images/design-mode/NoBG.png"
                alt="Dr. Pedro Luz"
                className="relative h-full w-auto max-w-none object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
