import React from "react";
import { Container } from "./styles";

export const DisplayRowData = ({
  title,
  value,
}: {
  title: string;
  value?: string;
}) => {
  if (!value) {
    return null;
  }

  return (
    <Container>
      <h3>{title}:</h3> <p>{value}</p>
    </Container>
  );
};
