"use client";

import { MainLayout } from "./components/_ui/MainLayout";
import { Section1 } from "./components/Home/Section1";
import { Section2 } from "./components/Home/Section2";
import { Section3 } from "./components/Home/Section3";
import { Section4 } from "./components/Home/Section4";
import { Section5 } from "./components/Home/Section5";
import { Section6 } from "./components/Home/Section6";
import { Section7 } from "./components/Home/Section7";
import { Section8 } from "./components/Home/Section8";
import { Footer } from "./components/Home/Footer";

export default function Home() {
  return (
    <MainLayout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </MainLayout>
  );
}
