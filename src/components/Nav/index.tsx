import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Basket3 } from "@styled-icons/bootstrap"
import logoImg from "../../assets/logo.png";
import { Container } from "./styles";


const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <ul>
        <li> <img src={logoImg} alt="Little Lemon Logo" /></li>
        <li> <HashLink to="/">Home</HashLink> </li>
        <li> <HashLink to="/#about">About</HashLink> </li>
        <li> <HashLink to="/#menu">Menu</HashLink> </li>
        <li> <HashLink to="/booking">Reservations</HashLink> </li>
        <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink></li>
        <li> <Basket3 size="24" /> </li>
      </ul>
    </Container>
  )
}

export default Nav