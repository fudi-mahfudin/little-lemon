import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.button<HTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 5rem;
  border-radius: ${p => p.theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.font.size.medium};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 0 1.3rem;

  :active {
    box-shadow: inset 0px 5px 4px rgba(0,0,0, 0.25);
  }
`;