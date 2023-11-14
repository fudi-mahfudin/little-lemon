import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.nav<HTMLAttributes<HTMLElement>>`
  width: 100%;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: ${p => p.theme.font.weight.bold};

    img {
      height: 40px;
    }
  }

  .orderBtn {
    padding: 1rem 1.5rem;
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.border.radius};
    background-color: ${p => p.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;