import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

`;
