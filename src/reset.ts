import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    appearance: none;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input[type="password"]::-ms-reveal {
    display: none;
  }
  input:focus{
    outline: none;
  }
`;
