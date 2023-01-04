import { ViewProps as DefaultViewProps } from "react-native";

import styled from "styled-components/native";

export interface ViewProps extends DefaultViewProps {
  children: JSX.Element | JSX.Element[];
  width?: string | number;
  direction?: "row" | "column";
  align?: string;
}

export const DefaultView = styled.View<ViewProps>`
  width: ${({ width }) => width};
  background-color: rgba(0, 0, 0, 0);
  flex-direction: ${({ direction }) => direction};
  margin: 3px;
  padding: 3px;
  ${({ align }) => ({
    alignItems: align,
    justifyContent: align,
  })};
`;

export const View = ({
  children,
  direction = "column",
  width = "auto",
  align = "flex-start",
  ...props
}: ViewProps) => (
  <DefaultView align={align} direction={direction} width={width} {...props}>
    {children}
  </DefaultView>
);
