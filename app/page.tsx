import { Header } from "@/components/afrilaura-header"
import { Hero } from "@/components/afrilaura-hero"
import { Courses } from "@/components/afrilaura-courses"
import { Enrollment } from "@/components/afrilaura-enrollment"
import { Fees } from "@/components/afrilaura-fees"
import { Transport } from "@/components/afrilaura-transport"
import { Activities } from "@/components/afrilaura-activities"
import { Contact } from "@/components/afrilaura-contact"
import { Footer } from "@/components/afrilaura-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Enrollment />
      <Fees />
      <Transport />
      <Activities />
      <Contact />
      <Footer />
    </main>
  )
}
