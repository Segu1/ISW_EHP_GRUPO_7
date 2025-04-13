import styled from "styled-components";
import bg from "../bg_footer3.png"

const Footer = styled.footer`
    min-height: 20em;
    background-image: url(${bg});
    background-color: #0c1515;
    background-repeat: repeat-x;
    background-position: top left;
    background-size: 800px auto;
    width: 100%;
    box-shadow: 0 0 5px 0 #0a1414;
    margin-top: 50px;
`

export const S = {
    Footer
}