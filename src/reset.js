import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
    /* background-clip: content-box; */
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input:focus{
    outline: none;
  }
`
