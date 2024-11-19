import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: normal;
    }
    h1 {
        font-weight: normal;
    }
    .mobile-only {
        display: none;
    }
    @media (max-width: 768px) {
        .desktop-only {
            display: none;
        }
        .mobile-only {
            display: block;
        }
    }
`