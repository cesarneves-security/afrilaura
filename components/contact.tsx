"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de envio do formulário
    alert("Obrigado pelo seu interesse! Entraremos em contacto em breve.")
    setFormData({ name: "", email: "", phone: "", language: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">Entre em Contacto</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Pronto para começar a tua jornada linguística? Fala connosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Informações de Contacto</CardTitle>
              <CardDescription>Estamos aqui para ajudar-te</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <a href="tel:+244948524979" className="text-muted-foreground hover:text-primary transition-colors">
                    +244 948 524 979
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:info@ilctbrenna.ao"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@ilctbrenna.ao
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                  <p className="text-muted-foreground">
                    Luanda, Angola
                    <br />
                    Centro de Idiomas ILC TBRENNA
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <img
                  src="/modern-language-school-building-in-luanda-angola.jpg"
                  alt="ILC TBRENNA Centro"
                  className="rounded-lg w-full h-48 object-cover shadow-md"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Envia-nos uma Mensagem</CardTitle>
              <CardDescription>Preenche o formulário e responderemos em breve</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome Completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Seleciona o Idioma</option>
                    <option value="ingles">Inglês</option>
                    <option value="frances">Francês</option>
                    <option value="espanhol">Espanhol</option>
                    <option value="vietnamita">Vietnamita</option>
                    <option value="mandarim">Mandarim</option>
                  </select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Mensagem (opcional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
