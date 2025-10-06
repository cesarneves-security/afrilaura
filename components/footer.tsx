import { Globe, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">ILC TBRENNA</h3>
                <p className="text-xs opacity-90">International Languages Center</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              O teu parceiro na jornada para a fluência em idiomas internacionais.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Idiomas</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Inglês</li>
              <li>Francês</li>
              <li>Espanhol</li>
              <li>Vietnamita</li>
              <li>Mandarim</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#home" className="hover:opacity-100 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="#languages" className="hover:opacity-100 transition-opacity">
                  Idiomas
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:opacity-100 transition-opacity">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Segue-nos</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm opacity-90">
              <strong>Telefone:</strong>
              <br />
              +244 948 524 979
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} ILC TBRENNA - International Languages Center. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
