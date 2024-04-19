import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/fonts.css';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        background-color: #F6F9F0;
        height: 100vh;
        overflow: hidden;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    body::-webkit-scrollbar {
        display: none;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    button[disabled] {
        cursor: default;
    }
    #root{
        display: flex;
        justify-content: center;
        position: relative;
        background-image: url('https://storage.googleapis.com/elice_04/vegan-ro-img/background.png');
        background-position: center;
        background-size: 124%;
        background-repeat: repeat-y;
        overflow-hidden;
        width: 100vw;
        height: 100vh;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    #root::-webkit-scrollbar {
        display: none;
    }
    img[src='']{
        display: none !important;
    }
    details[open] > summary::after {
        transform: rotate(180deg);
        transform-origin: center;
    }
    summary::-webkit-details-marker {
        display: none;
    }
    .desktop-toast {
        position: absolute;
        top: 60px;
        right: 20px;
    }

    .mobile-toast {
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;

export default GlobalStyles;
