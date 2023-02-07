import Head from "next/head";
import { Container } from "@/styles/home";
import { Header } from "@/components/header";
import { ScrollPaperDisplay } from "@/components/scrollPaperDisplay";
import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from "./api/api";
import { monsterResType } from "@/@types/monsterResType";

type monsterProps = {
  challengeRating: string;
  name: string;
  size: string;
  type: string;
  alignment: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [monster, setMonster] = useState<monsterResType>({} as monsterResType);

  const getMonster = async () => {
    try {
      setIsLoading(true);
      const res = await Api.get<monsterResType>("monsters/aboleth");
      console.log(res);
      setMonster(res.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMonster();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <ScrollPaperDisplay {...monster} />
        <button onClick={() => console.log(monster)}>button</button>
      </Container>
    </>
  );
}
