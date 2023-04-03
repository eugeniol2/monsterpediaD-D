import styled, { css } from "styled-components";

interface ContainerProps {
  hasTitle?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ hasTitle }) =>
    hasTitle &&
    css`
      margin-bottom: 16px;
    `}
  display: ${({ hasTitle }) => (hasTitle ? "block" : "flex")};
  align-items: center;
  gap: 8px;
  text-transform: capitalize;
  > p {
    font-size: 18px;
  }
`;
