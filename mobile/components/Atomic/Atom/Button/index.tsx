import styled from "styled-components/native";
import { TouchableOpacityProps as DefaultButtonProps } from "react-native";

export interface ButtonProps extends DefaultButtonProps {
  children: JSX.Element | JSX.Element[];
  backgorund?: string;
}

export const DefaultButton = styled.TouchableOpacity<ButtonProps>`
  width: 90%;
  height: auto;
  margin: 8px;
  padding: 8px;
  background-color: ${({ backgorund }) => backgorund};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Button = ({
  backgorund = "#FFF",
  children,
  ...props
}: ButtonProps) => {
  return (
    <DefaultButton backgorund={backgorund} {...props}>
      {children}
    </DefaultButton>
  );
};
