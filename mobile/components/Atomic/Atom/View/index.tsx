import { ViewProps as DefaultViewProps } from "react-native";

import styled from "styled-components/native";

export interface ViewProps extends DefaultViewProps {
  children: JSX.Element | JSX.Element[];
  width?: string | number;
  direction?: "row" | "column";
}

export const DefaultView = styled.View<ViewProps>`
  width: ${({ width }) => width};
  background-color: rgba(0, 0, 0, 0);
  flex-direction: ${({ direction }) => direction};
  margin: 3px;
  padding: 3px;
`;

export const View = ({
  children,
  direction = "column",
  width = "auto",

  ...props
}: ViewProps) => (
  <DefaultView direction={direction} width={width} {...props}>
    {children}
  </DefaultView>
);
