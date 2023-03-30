import React, { ReactNode } from "react";
import { Container, Description, Title } from "./styles";

interface MonsterActionProps {
  title: string | undefined;
  description: string | undefined;
  children?: ReactNode;
}

export const MonsterAction: React.FC<MonsterActionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </Container>
  );
};
