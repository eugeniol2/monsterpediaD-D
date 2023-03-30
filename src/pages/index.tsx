import Head from "next/head";
import { Container } from "@/styles/home";
import { Header } from "@/components/header";
import { MonsterSection } from "@/components/monsterSection";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <MonsterSection />
      </Container>
    </>
  );
}
