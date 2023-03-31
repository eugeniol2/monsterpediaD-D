import React, { Children, ReactElement } from "react";
import { Container, Content, HorizontalLine } from "./styles";

interface ParagraphProps {
  title: string;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ title, children }) => {
  console.log(children);
  if (!children) {
    return null;
  }
  return (
    <Container>
      <h2>{title}</h2>
      <HorizontalLine />
      <Content>{children}</Content>
    </Container>
  );
};
