import { FC, HTMLAttributes, useState } from "react";
import { Basket3, List, XCircle } from "styled-icons/bootstrap";
import { Container, Menu } from "./styles";
import { HashLink } from "react-router-hash-link";
import logoImg from "../../assets/logo.png";

const NavMobile: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  }

  return (
    <Container {...props}>
      <ul>
        <li>
          <button aria-label="Open menu" onClick={handleMenu}> <List size={24} /> </button>
        </li>
        <li> <Basket3 size={24} /> </li>
      </ul>

      <Menu className={menuOpen ? "opened" : ""}>
        <button aria-label="Close menu" onClick={handleMenu}> <XCircle size={24} /> </button>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="/#about">About</HashLink> </li>
          <li> <HashLink to="/#menu">Menu</HashLink> </li>
          <li> <HashLink to="/booking">Reservation</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="/#">Order Online</HashLink> </li>
        </ul>
      </Menu>
    </Container>
  )
}

export default NavMobile