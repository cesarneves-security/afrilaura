"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Building2 } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contacto em breve.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      content: "Rua 17 de Setembro nº 35, Zona 10",
      content2: "Depois da Comarca de Viana",
      content3: "Por detrás às bombas de combustíveis dos Montes Claros",
    },
    {
      icon: Phone,
      title: "Contactos Telefónicos",
      items: [
        { label: "Facturação", number: "944 413 764" },
        { label: "Secretaria Pedagógica", number: "923 335 126" },
        { label: "Direcção Pedagógica", number: "923 536 224" },
        { label: "Coordenador Curso de Saúde", number: "926 110 910 / 992 110 910" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      content: "colegioafrilaure@gmail.com",
    },
    {
      icon: Building2,
      title: "Contas Bancárias",
      items: [
        { label: "BNI", number: "1053546" },
        { label: "IBAN", number: "AO06 0052 0000 0105 3546 1015 9" },
        { label: "Banco Económico", number: "00008226183" },
        { label: "IBAN", number: "AO06 0045 0078 0000 8226 1832 8" },
      ],
    },
  ]

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tem dúvidas? Quer inscrever-se? Entre em contacto connosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envie-nos uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nome Completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Mensagem"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg h-fit">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.content && <p className="text-muted-foreground text-sm">{info.content}</p>}
                      {info.content2 && <p className="text-muted-foreground text-sm">{info.content2}</p>}
                      {info.content3 && <p className="text-muted-foreground text-sm">{info.content3}</p>}
                      {info.items && (
                        <div className="space-y-1 mt-2">
                          {info.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="text-sm">
                              <span className="font-medium">{item.label}:</span>{" "}
                              <span className="text-muted-foreground">{item.number}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
