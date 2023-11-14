import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 26rem;
  height: 43.9rem;
  display: grid;
  grid-template-rows: 19.1rem repeat(3, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "header"
    "body"
    "callToAction";
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${p => p.theme.colors.highlight_light};
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.border.radius} ${p => p.theme.border.radius} 0 0;
  gap: 1.6rem;
`;

export const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  grid-area: image;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.border.radius} ${p => p.theme.border.radius} 0 0;
`;

export const Header = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.6rem 0 1.6rem;

  .highlight {
    color: ${p => p.theme.colors.tertiary};
    font-weight: ${p => p.theme.font.weight.bold};
  }
`;

export const Body = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  grid-area: body;
  height: 12rem;
  padding: 0 1.6rem;
  color: ${p => p.theme.colors.primary};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CallToAction = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: callToAction;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.8rem;
  padding: 0 1.6rem 2rem 1.6rem;

  .highlight {
    font-weight: ${p => p.theme.font.weight.bold};
    border: none;
  }
`;