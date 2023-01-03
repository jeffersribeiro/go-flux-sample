import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface TextAreaProps extends TextInputProps {}

const Area = styled.TextInput<TextAreaProps>`
  height: 100px;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #dcdcdc;
`;

export const TextArea = (props: TextAreaProps) => {
  return <Area {...props} />;
};
