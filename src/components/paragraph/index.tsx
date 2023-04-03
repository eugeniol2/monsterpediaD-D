import React, { useEffect } from "react";
import { Container, Content, HorizontalLine } from "./styles";
import { DisplayRowData } from "../displayRowData";
import { MonsterFactoryType } from "@/@types/monsterFactoryType";

interface ParagraphProps {
  title: string;
  data: any;
  isArray?: boolean;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  title,
  data,
  isArray,
}) => {
  const objectKeys = Object.keys(data);
  const isString = typeof data === "string";
  const isDataUndefined = !data;

  const isDataBlank = () => {
    let result = true;
    objectKeys.forEach((key) => {
      if (data[key]) {
        result = false;
      }
    });
    return result;
  };

  if (isDataUndefined || isDataBlank()) {
    return null;
  }

  return (
    <Container>
      <h2 style={{ textTransform: "capitalize" }}>{title}</h2>
      <HorizontalLine />
      {isArray ? (
        <Content>
          {data?.map((reactions: any) => (
            <DisplayRowData
              key={reactions.name}
              title={reactions.name}
              value={reactions.desc}
              disableTitle
            />
          ))}
        </Content>
      ) : (
        <Content>
          {isString ? (
            <DisplayRowData title={title} value={data} disableTitle />
          ) : (
            <>
              {objectKeys?.map((key) => (
                <DisplayRowData key={key} title={key} value={data[key]} />
              ))}
            </>
          )}
        </Content>
      )}
    </Container>
  );
};
