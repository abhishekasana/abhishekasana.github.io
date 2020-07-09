import React from "react";
import styled from 'styled-components';

const TitleWrapper = styled.p`
    font-size: 36px;
    opacity: 0.5;
    font-family: 'Monoton', cursive;
    text-align: right;
    margin-right: 8px;
    @media (max-width: 767px) {
        margin-right: 0px;
        text-align: center;
    }
`;

const Footer = () => (
    <TitleWrapper>NEVER SETTLE</TitleWrapper>
);

export default Footer;
