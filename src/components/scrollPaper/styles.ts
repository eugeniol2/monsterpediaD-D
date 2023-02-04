import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import scrollPaper from "../../../public/scrollPaper.png";

export const Container = styled.div`
  position: relative;
`;
export const BackGroundImage = styled(Image)`
  height: 500px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 32px 32px 32px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PaperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  > h1 {
    font-size: 32px;
  }
  color: ${({ theme }) => theme.COLORS.red};
`;
