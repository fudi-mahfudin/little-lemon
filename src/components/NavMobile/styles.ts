import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.nav<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: 100%;
  display: none;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: ${p => p.theme.font.weight.bold};
  }

  button {
    border: none;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${p => p.theme.colors.white};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  overflow: hidden;

  &.opened {
    transform: translateX(0);
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    font-weight: ${p => p.theme.font.weight.bold};

    img {
      height: 40px;
    }
  }

  button {
    position: fixed;
    left: 5rem;
    top: 3rem;
    border: none;
    background-color: transparent;
  }

  .orderBtn {
    padding: 1rem 1.5rem;
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.border.radius};
    background-color: ${p => p.theme.colors.primary};
  }
`;