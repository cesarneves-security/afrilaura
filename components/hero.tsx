"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">Torna-te Fluente!</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Aprende idiomas internacionais com os melhores professores de Angola. Expande os teus horizontes e
              conecta-te com o mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" onClick={scrollToContact}>
                Inscreve-te Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-primary text-primary hover:bg-primary/10 bg-transparent"
                onClick={() => {
                  const element = document.getElementById("languages")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Ver Idiomas
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/diverse-african-students-learning-languages-in-mod.jpg"
                alt="Estudantes aprendendo idiomas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm">Idiomas Disponíveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
