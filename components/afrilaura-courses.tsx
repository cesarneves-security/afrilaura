import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Stethoscope, Microscope, GraduationCap } from "lucide-react"

export function Courses() {
  const courses = [
    {
      icon: BookOpen,
      title: "Ensino Primário",
      description: "Educação fundamental de qualidade para crianças, com foco no desenvolvimento integral.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: GraduationCap,
      title: "I e II Ciclos do Ensino Secundário",
      description: "Preparação académica sólida para o ensino superior e mercado de trabalho.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Stethoscope,
      title: "Curso Médio de Enfermagem",
      description: "Formação técnica profissional em enfermagem com prática clínica supervisionada.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Microscope,
      title: "Curso Médio de Análises Clínicas",
      description: "Capacitação técnica em análises laboratoriais e diagnóstico clínico.",
      color: "bg-secondary/10 text-secondary",
    },
  ]

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Cursos</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de cursos académicos e técnicos para formar profissionais qualificados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center mb-4`}>
                  <course.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
