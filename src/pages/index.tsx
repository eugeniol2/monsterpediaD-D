import { Container } from "@/styles/home";
import { Header } from "@/components/header";
import { MonsterSection } from "@/components/monsterSection";
import { GetStaticProps } from "next";
import { Api } from "./api/api";
import { MonsterFactoryType } from "@/@types/monsterFactoryType";
import { useEffect, useState } from "react";
import { MonsterFactory } from "@/factory/monsterFactory";

export default function Home({ allMonstersRes }: any) {
  const [monster, setMonster] = useState<MonsterFactoryType>();

  useEffect(() => {
    const sendDefaultMonster = () => {
      const defaultMonster = MonsterFactory(allMonstersRes[0]);
      setMonster(defaultMonster);
    };
    sendDefaultMonster();
  }, [allMonstersRes]);

  return (
    <>
      {monster !== undefined && (
        <>
          <Header setMonster={setMonster} allMonstersRes={allMonstersRes} />
          <Container>
            <MonsterSection monster={monster} />
          </Container>
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await Api.get("monsters");
  const allMonstersRes = [...response.data.results];
  return {
    props: {
      allMonstersRes,
    },
    revalidate: 86400, // once per day
  };
};
