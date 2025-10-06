"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Building2 } from "lucide-react"

export function Contact() {
  const contacts = [
    { icon: Phone, label: "Facturação", value: "944 413 764" },
    { icon: Phone, label: "Secretaria Pedagógica", value: "923 335 126" },
    { icon: Phone, label: "Direcção Pedagógica", value: "923 536 224" },
    { icon: Phone, label: "Coordenador Curso de Saúde", value: "926 110 910 / 992 110 910" },
    { icon: Phone, label: "Responsável dos Transportes", value: "923 525 994 / 912 375 337" },
  ]

  const banks = [
    { name: "BNI", account: "1053546", iban: "AO06 0052 0000 0105 3546 1015 9" },
    { name: "Banco Económico", account: "00008226183", iban: "AO06 0045 0078 0000 8226 1832 8" },
  ]

  return (
    <section id="contactos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contactos</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">Entre em contacto connosco para mais informações</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contactos Telefónicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-semibold text-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contas Bancárias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {banks.map((bank, index) => (
                  <div key={index} className="p-4 bg-secondary/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-secondary" />
                      <p className="font-bold text-foreground">{bank.name}</p>
                    </div>
                    <p className="text-sm text-foreground">
                      Conta: <strong>{bank.account}</strong>
                    </p>
                    <p className="text-sm text-foreground">
                      IBAN: <strong>{bank.iban}</strong>
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Informações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">colegioafrilaure@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-semibold text-foreground">
                      Rua 17 de Setembro nº 35, zona 10
                      <br />
                      Viana, Luanda - Angola
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Envie-nos uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input id="phone" type="tel" placeholder="+244 900 000 000" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Informações sobre matrícula" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Escreva sua mensagem aqui..." rows={5} />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
