import { FieldError } from "react-hook-form";
import styled from "styled-components/native";
import { TextInputProps as DefaultTextInputProps } from "react-native";
import { Text } from "../../Atom/Text";

export interface TextInputProps extends DefaultTextInputProps {
  error?: FieldError | undefined;
}

export const DefaultTextInput = styled.TextInput<TextInputProps>`
  width: 90%;
  height: 60px;
  font-size: 21px;
  border: solid 1px #e0e0e0;
  margin: 10px;
  padding: 8px;
  border-radius: 8px;
`;

const TextInput = ({ error, ...props }: TextInputProps) => {
  return (
    <>
      <DefaultTextInput placeholderTextColor="#e0e0e0" {...props} />
      {error?.message && <Text color="#ea1d2c">{error?.message}</Text>}
    </>
  );
};

export default TextInput;
