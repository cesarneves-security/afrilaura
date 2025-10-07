import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Activity, CheckCircle, Laptop, Users, Calculator, Radio } from "lucide-react"

export function Courses() {
  const courses = [
    {
      icon: Heart,
      title: "Enfermagem",
      duration: "3 Anos",
      description:
        "Formação completa em cuidados de enfermagem, preparando profissionais qualificados para atuar em hospitais, clínicas e centros de saúde.",
      topics: [
        "Anatomia e Fisiologia",
        "Cuidados de Enfermagem",
        "Farmacologia",
        "Enfermagem Materno-Infantil",
        "Enfermagem Cirúrgica",
        "Primeiros Socorros",
      ],
    },
    {
      icon: Activity,
      title: "Análises Clínicas",
      duration: "3 Anos",
      description: "Formação técnica em análises laboratoriais, microbiologia e diagnóstico clínico.",
      topics: [
        "Hematologia",
        "Bioquímica Clínica",
        "Microbiologia",
        "Parasitologia",
        "Imunologia",
        "Técnicas Laboratoriais",
      ],
    },
    {
      icon: Laptop,
      title: "Informática",
      duration: "3 Anos",
      description: "Formação em tecnologias da informação, programação e gestão de sistemas computacionais.",
      topics: [
        "Programação",
        "Redes de Computadores",
        "Bases de Dados",
        "Desenvolvimento Web",
        "Sistemas Operacionais",
        "Segurança Informática",
      ],
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      duration: "3 Anos",
      description: "Formação em gestão de pessoas, recrutamento e desenvolvimento organizacional.",
      topics: [
        "Gestão de Pessoas",
        "Recrutamento e Seleção",
        "Legislação Laboral",
        "Psicologia Organizacional",
        "Desenvolvimento de Talentos",
        "Administração de Pessoal",
      ],
    },
    {
      icon: Calculator,
      title: "Contabilidade e Gestão",
      duration: "3 Anos",
      description: "Formação em contabilidade, finanças e gestão empresarial para o mercado angolano.",
      topics: [
        "Contabilidade Geral",
        "Contabilidade de Custos",
        "Gestão Financeira",
        "Fiscalidade",
        "Auditoria",
        "Gestão Empresarial",
      ],
    },
    {
      icon: Radio,
      title: "Electrónica e Telecomunicação",
      duration: "3 Anos",
      description: "Formação técnica em sistemas electrónicos, telecomunicações e redes de comunicação.",
      topics: [
        "Circuitos Electrónicos",
        "Sistemas de Telecomunicações",
        "Redes de Comunicação",
        "Electrónica Digital",
        "Manutenção de Equipamentos",
        "Tecnologias Wireless",
      ],
    },
  ]

  return (
    <section id="cursos" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ensino Técnico Médio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos cursos técnicos de nível médio com duração de 3 anos, preparando os alunos para o mercado de
            trabalho e ensino superior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 shine-effect bg-gradient-to-br from-card to-muted/20"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-secondary">
                      {course.duration}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty text-sm">{course.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Disciplinas Principais:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
