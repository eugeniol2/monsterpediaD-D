import React, { ReactElement } from "react";
import { Container, Content, Title } from "./styles";

interface paperTopicProps {
  title: string;
  children: ReactElement[];
}

export const PaperTopic: React.FC<paperTopicProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
      </Title>
      <Content>{children}</Content>
    </Container>
  );
};
