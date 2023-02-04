import Head from "next/head";
import { Container } from "@/styles/home";
import { Header } from "@/components/header";
import { ScrollPaperDisplay } from "@/components/scrollPaper";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ScrollPaperDisplay />
      </Container>
    </>
  );
}
