import React from "react";
import { Container } from "./styles";

export const DisplayRowData = ({
  title,
  value,
  isActions,
  isSavingThrow,
}: {
  title?: string;
  value?: string;
  isActions?: boolean;
  isSavingThrow?: boolean;
}) => {
  if (!value && !isSavingThrow) {
    return null;
  }

  return (
    <Container isActions={isActions}>
      <h3>
        - {title}
        {!isActions && ":"}
      </h3>
      <p>{isSavingThrow ? "Nonexistent" : value}</p>
    </Container>
  );
};
