import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Column, Container, Content, Copyright, Image } from "./styles";
import restaurant from "../../assets/restaurant.jpg";
import { Facebook, Instagram, Twitter } from "@styled-icons/bootstrap";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>Little <br /> Lemon</h4>
          <ul>
            <li> <HashLink to="/">Home</HashLink> </li>
            <li> <HashLink to="/#menu">Menu</HashLink> </li>
            <li> <HashLink to="/#booking">Reservations</HashLink> </li>
            <li> <HashLink to="/#">Order Online</HashLink> </li>
            <li> <HashLink to="/#">Login</HashLink> </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago,<br />
                Illinois 60602 <br />
                USA
              </address>
            </li>
            <li> <a href="tel:+5511888888" target="_blank" rel="external">+55 11 8888-88</a></li>
            <li> <a href="mailto:contact@littlelemon.com" target="_blank" rel="external">contact@littlelemon.com</a></li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul className="list-horizontal">
            <li> <a href="https://www.facebook.com/littlelemon" target="_blank" rel="external"><Facebook size={24} /></a></li>
            <li> <a href="https://www.instagram.com/littlelemon" target="_blank" rel="external"><Instagram size={24} /></a></li>
            <li> <a href="https://www.twitter.com/littlelemon" target="_blank" rel="external"><Twitter size={24} /></a></li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed with <a href="/#"> ❤️ </a></span>
        <p>© 2023 Little lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  )
}

export default Footer