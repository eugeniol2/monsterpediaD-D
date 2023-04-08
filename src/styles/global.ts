import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #510101;
        --deepRed: #270303;        
        --white: #ffffff;

        --background: #0F0000;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;               
    }


    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) { 
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        min-width: 1024px;
    }

    *:focus {
        outline: none;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
`;
