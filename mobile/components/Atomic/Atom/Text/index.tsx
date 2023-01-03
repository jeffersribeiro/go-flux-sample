import { TextProps as DefaultTextProps } from "react-native";
import styled from "styled-components/native";

export interface TextProps extends DefaultTextProps {
  children: JSX.Element | JSX.Element[] | string | any;
  color?: string;
  fontSize?: string;
  align?: string;
  weight?: string;
}

export const DefaultText = styled.Text<TextProps>`
  color: ${({ color }) => color};
  margin: 8px;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ fontSize }) => fontSize};
`;

export const Text = ({
  color = "#000",
  fontSize = "16px",
  align = "justify",
  weight = "400",
  children,
  ...props
}: TextProps) => {
  return (
    <DefaultText
      weight={weight}
      align={align}
      color={color}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </DefaultText>
  );
};
