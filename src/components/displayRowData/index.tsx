import React from "react";
import { Container } from "./styles";

interface DisplayRowDataProps {
  title?: string;
  value?: string;
  disableTitle?: boolean;
}

export const DisplayRowData: React.FC<DisplayRowDataProps> = ({
  title,
  value,
  disableTitle,
}) => {
  const isValueUndefined = !value;

  if (isValueUndefined) {
    return null;
  }

  return (
    <Container hasTitle={disableTitle}>
      <h3>
        - {title}
        {!disableTitle && ":"}
      </h3>
      <p>{value}</p>
    </Container>
  );
};
