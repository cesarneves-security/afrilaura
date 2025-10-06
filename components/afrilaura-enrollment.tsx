import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Award as IdCard, Syringe, Camera } from "lucide-react"

export function Enrollment() {
  const documents = [
    { icon: FileText, text: "Certificado de Habilitações Literárias" },
    { icon: IdCard, text: "Fotocópia do Bilhete de Identidade" },
    { icon: Syringe, text: "Cartão de Vacina Actualizado" },
    { icon: FileText, text: "Atestado Médico" },
    { icon: Camera, text: "4 Fotografias tipo passe" },
  ]

  const fees = [
    { label: "Inscrição para a 10ª classe", value: "2.000,00 Kz" },
    { label: "Reconfirmação de Matrícula", value: "8.000,00 Kz" },
    { label: "Matrícula (pela 1ª vez)", value: "10.000,00 Kz" },
    { label: "Cartão de Estudante", value: "1.500,00 Kz" },
  ]

  return (
    <section id="matriculas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Matrículas e Reconfirmações</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Informações sobre documentos necessários e valores de matrícula
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Documentos Necessários</CardTitle>
              <CardDescription>Prepare os seguintes documentos para a matrícula</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <doc.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground pt-2">{doc.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Valores de Matrícula</CardTitle>
              <CardDescription>Taxas para o ano lectivo 2024/2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {fees.map((fee, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground">{fee.label}</span>
                    <span className="font-bold text-secondary">{fee.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong className="text-secondary">Promoção Dezembro:</strong> Matrícula por 9.000,00 Kz e
                  Reconfirmação por 7.000,00 Kz
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-foreground text-center">
                <strong>Nota Importante:</strong> Caso se efectue a anulação da matrícula por qualquer motivo, não serão
                reembolsados os valores monetários pagos, nem a substituição por outro aluno.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
