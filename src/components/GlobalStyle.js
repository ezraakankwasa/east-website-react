import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #0A59A7;
    font-family: 'Roboto', sans-serif;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: yellow;
    color: #0a59a7;
    border-radius: 40px;
    transition: all 0.5s ease;
    &:hover{
        background-color:#23d997;
        color: white;
    }
}

h1,h2,h3,h4,h5{
    font-family: 'Playfair Display', serif;
    font-weight: 900;
}

h2{
        font-weight: lighter;
        font-size: 4rem;
    }
h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
        text-decoration: none;
    }
p{
        padding: 3rem 0rem;
        color: #fff;
        font-size: 1.4rem;
        line-height: 150%;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }

`;

export default GlobalStyle;
