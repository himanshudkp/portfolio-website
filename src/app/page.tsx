"use client";

import { About, Contact, Footer, Hero, Projects, Skills } from "@/components";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
