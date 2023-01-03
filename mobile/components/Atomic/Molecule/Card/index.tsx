import React from "react";
import { StyledCard } from "./styled";

interface CardProps {
  children: JSX.Element[];
}

const Card = (props: CardProps) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
