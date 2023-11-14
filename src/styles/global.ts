import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    -webkit-font-smoothing: antialiased;
  };

  body, input, button, textarea {
    font-family: ${p => p.theme.font.family.secondary};
    font-size: ${p => p.theme.font.size.small};
    outline: none;
  }

  h1, h2, .card-title {
    font-family: ${p => p.theme.font.family.primary};
  };

  h1 {
    font-size: ${p => p.theme.font.size.huge};
    font-weight: ${p => p.theme.font.weight.medium};
  };

  h2 {
    font-size: ${p => p.theme.font.size.xlarge};
    font-weight: ${p => p.theme.font.weight.regular};
  };

  h3 {
    font-size: ${p => p.theme.font.size.large};
    font-weight: ${p => p.theme.font.weight.extrabold};
    text-transform: uppercase;
  };

  h4 {
    font-size: ${p => p.theme.font.size.medium};
    font-weight: ${p => p.theme.font.weight.extrabold};
  };

  .lead-txt {
    font-weight: ${p => p.theme.font.weight.medium};
  };

  .highlight {
    font-weight: ${p => p.theme.font.weight.medium};
  };

  .card-title {
    font-size: ${p => p.theme.font.size.medium};
    font-weight: ${p => p.theme.font.weight.bold};
  };

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a, input[type="submit"] {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`;