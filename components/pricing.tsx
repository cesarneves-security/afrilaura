import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"

export function Pricing() {
  const matriculas = [
    { item: "Inscrição para a 10ª classe", price: "2.000,00 Kz" },
    { item: "Reconfirmação de Matrícula", price: "8.000,00 Kz" },
    { item: "Matrícula (pela 1ª vez)", price: "10.000,00 Kz" },
    { item: "Cartão de Estudante", price: "1.500,00 Kz" },
  ]

  const propinas = [
    { classe: "10ª Classe", price: "14.500,00 Kz/mês" },
    { classe: "11ª Classe", price: "15.000,00 Kz/mês" },
    { classe: "12ª Classe", price: "16.000,00 Kz/mês" },
  ]

  const uniformes = [
    { item: "Bata", price: "12.000,00 Kz" },
    { item: "Uniforme de Ed. Física", price: "9.000,00 Kz" },
  ]

  const descontos = [
    "10% de desconto para pagamento anual completo",
    "5% de desconto para pagamento de 6 meses",
    "10% de desconto na propina de um aluno para encarregados com mais de 3 alunos matriculados",
    "Desconto especial em Dezembro: Reconfirmação 7.000,00 Kz e Matrícula 9.000,00 Kz",
  ]

  return (
    <section id="precos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Matrículas e Propinas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Informações sobre valores de matrículas, propinas e descontos disponíveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Matrículas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {matriculas.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                  <span className="text-sm">{item.item}</span>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Propinas Mensais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {propinas.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                  <span className="text-sm font-medium">{item.classe}</span>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
              ))}
              <div className="pt-2">
                <Badge variant="destructive" className="text-xs">
                  Pagamento até dia 10 de cada mês
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Uniformes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {uniformes.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                  <span className="text-sm">{item.item}</span>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
              ))}
              <div className="pt-2">
                <Badge className="text-xs">Uso obrigatório</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Descontos Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {descontos.map((desconto, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{desconto}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Normas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Pagamento fora do prazo: multa de 25%</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Após 10 dias de atraso: suspensão até liquidação da dívida</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Pagamento via banco ou multicaixa</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Bordereau deve dar entrada na secretaria em 24 horas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
