import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function About() {
  const benefits = [
    "Horários flexíveis adaptados à tua rotina",
    "Metodologia comunicativa e prática",
    "Ambiente multicultural e inclusivo",
    "Preparação para exames internacionais",
    "Aulas presenciais em Luanda",
    "Material didático incluído",
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">Sobre o ILC TBRENNA</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Somos o principal centro de idiomas em Angola, dedicados a proporcionar educação linguística de
              excelência. Com professores qualificados e uma metodologia moderna, preparamos os nossos alunos para se
              comunicarem com confiança no mundo globalizado.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              No ILC TBRENNA, acreditamos que aprender um novo idioma é mais do que memorizar palavras - é abrir portas
              para novas culturas, oportunidades e conexões humanas.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/african-students-studying-together-in-language-cen.jpg"
                alt="Estudantes estudando"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold mb-1">1000+</p>
                  <p className="text-sm">Alunos Formados</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 pt-8">
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold mb-1">15+</p>
                  <p className="text-sm">Anos de Experiência</p>
                </CardContent>
              </Card>
              <img
                src="/african-teacher-teaching-language-class-with-stude.jpg"
                alt="Professor ensinando"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
