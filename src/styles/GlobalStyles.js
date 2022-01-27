import { createGlobalStyle } from "styled-components";

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  -webkit-font-smoothing: antialised;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(67, 75, 83, 0.7); 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background:rgb(67, 75, 83); 
  } 
  ::-moz-selection { /* Code for Firefox */
    background: ${(props) => props.theme.color.white};
    -webkit-text-decoration-color: #fff;
    text-decoration-color: #fff;
  }
  ::selection {
    background: ${(props) => props.theme.color.white};
    -webkit-text-decoration-color: #fff;
    text-decoration-color: #fff;
  }
  body {
    font-family: ${(props) => props.theme.font.primary};
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, p, h6,h5 {
    margin: 0;
  }
  h1, h2, h3 {
    font-family: ${(props) => props.theme.font.secondary};
    font-weight: 700;
  }
  h5,h6,p {
    font-family: ${(props) => props.theme.font.primary};
  }
  h1 {
    ${(props) => props.theme.font_size.xlarge};
  }
  h2 {
    ${(props) => props.theme.font_size.larger};
  }
  h3 {
    ${(props) => props.theme.font_size.large};
  }
  h5{
    font-size: 16px;
  }
  h6.bold {
    ${(props) => props.theme.font_size.regular};
    font-weight: bold;
    padding: 5px 0;
  }
  h6 {
    ${(props) => props.theme.font_size.regular};
  }
  h6.nopad{
    ${(props) => props.theme.font_size.regular};
    padding: 5px 0 0;
  }
  p {
    ${(props) => props.theme.font_size.small};
  }
  p.opacity {
    ${(props) => props.theme.font_size.small};
    color: rgba(0, 0, 0, 0.7);
    margin: 5px 0;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    h1 {
      ${(props) => props.theme.font_size.larger};
    }
    h2 {
      ${(props) => props.theme.font_size.large};
    }
    h3 {
      ${(props) => props.theme.font_size.regular};
      font-weight: bold;
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.color.black.A900};
  }
  textarea {
    resize: none;
  }
  
  button {
    outline: none;
    border: none;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  input{
    outline: none;
  }
`;

export default GlobalStyles;
