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

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    border-radius: 20px;
    height: 80px;

    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`

export default GlobalStyle
