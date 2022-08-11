import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: left;
    }
`

export default GlobalStyle
