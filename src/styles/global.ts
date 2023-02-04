import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #510101;
        --deepRed: #270303;        
        --white: #ffffff;

        --background: #0F0000;
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
    }

    *:focus {
        outline: none;
    }
`;
