"use client";

import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
