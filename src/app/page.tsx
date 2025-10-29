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
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Skills />
      <Separator />
      <Contact />
      <Footer />
    </>
  );
}
