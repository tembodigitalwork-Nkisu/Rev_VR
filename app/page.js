import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Pricing from "@/components/Pricing";
import Corporate from "@/components/Corporate";
import Visit from "@/components/Visit";
import FAQ from "@/components/FAQ";
import Social from "@/components/Social";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experiences />
      <Pricing />
      <Corporate />
      <Visit />
      <FAQ />
      <Social />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
