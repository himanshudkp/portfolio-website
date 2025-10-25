"use client";

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components";

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
