import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Red Hat Display", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: left;
    }
`

export default GlobalStyle
