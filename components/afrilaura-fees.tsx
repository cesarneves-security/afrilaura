import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, Calendar, Gift, AlertCircle } from "lucide-react"

export function Fees() {
  const tuitionFees = [
    { grade: "10ª Classe", amount: "14.500,00 Kz" },
    { grade: "11ª Classe", amount: "15.000,00 Kz" },
    { grade: "12ª Classe", amount: "16.000,00 Kz" },
  ]

  const discounts = [
    { condition: "Pagamento anual completo", discount: "10% de desconto" },
    { condition: "Pagamento de 6 meses", discount: "5% de desconto" },
    { condition: "3 ou mais alunos matriculados", discount: "10% em um aluno" },
  ]

  return (
    <section id="propinas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Propinas e Pagamentos</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Informações sobre valores mensais e condições de pagamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {tuitionFees.map((fee, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{fee.grade}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">{fee.amount}</p>
                <p className="text-sm text-muted-foreground mt-2">por mês</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-primary">Normas de Pagamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Pagamento até ao dia <strong>10 de cada mês</strong> via banco ou multicaixa
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Bordereau deve dar entrada na secretaria em <strong>24 horas</strong> após depósito
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Pagamento fora do prazo: <strong className="text-secondary">multa de 25%</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Após 10 dias de atraso: <strong className="text-secondary">suspensão até liquidação</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-6 h-6 text-secondary" />
                <CardTitle className="text-xl text-primary">Descontos Disponíveis</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {discounts.map((discount, index) => (
                <div key={index} className="p-4 bg-secondary/10 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">{discount.condition}</p>
                  <p className="text-secondary font-bold">{discount.discount}</p>
                </div>
              ))}
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Prémio:</strong> O melhor aluno do quadro de honra de cada nível por trimestre terá direito a
                  um estímulo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-sm text-foreground">
                  <strong>Atenção:</strong> Alunos com direito a desconto que atrasarem na liquidação da propina
                  perderão este privilégio e sujeitar-se-ão ao pagamento normal acrescido da respectiva multa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
