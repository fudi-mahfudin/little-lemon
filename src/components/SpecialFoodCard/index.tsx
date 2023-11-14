import { FC, HTMLAttributes } from "react";
import { Container, Image, Header, Body, CallToAction } from "./styles";
import { DirectionsBike } from "@styled-icons/material";

interface SpecialFoodCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({ imageUrl, title, price, description, ...props}): JSX.Element => {
  return (
    <Container {...props}>
      <Image src={imageUrl} />
      <Header>
        <span className="title card-title">{title}</span>
        <span className="price highlight">$ {price}</span>
      </Header>
      <Body> {description} </Body>
      <CallToAction>
        <button className="highlight">Order a delivery</button>
        <DirectionsBike size={24} />
      </CallToAction>
    </Container>
  )
}

export default SpecialFoodCard