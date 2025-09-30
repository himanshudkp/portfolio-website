"use client";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Experience } from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";

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
