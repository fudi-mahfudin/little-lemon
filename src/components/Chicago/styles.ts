import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  height: 100vh;
  min-height: 65.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 966px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 1120px) {
    width: 90%;
  }
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 28rem;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${p => p.theme.colors.primary};
    width: fit-content;
  }

  h2 {
    color: ${p => p.theme.colors.tertiary};
    width: fit-content;
  }

  p {
    max-width: 28rem;
    margin: 2rem 0;
    color: ${p => p.theme.colors.primary};
  }

  @media (max-width: 966px) {
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  img {
    object-fit: cover;
    width: 24.7rem;
    height: 33.8rem;

    :first-of-type {
      position: absolute;
      top: 12rem;
      left: -12rem;
      z-index: 2;
    }
  }

  @media (max-width: 996px) {
    display: none;
  }
`;