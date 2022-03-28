import React from "react";
import styled from 'styled-components';
import Head from "next/head";

const TitleWrapper = styled.p`
    font-size: 36px;
    opacity: 0.5;
    //font-family: 'Monoton', cursive;
    text-align: right;
    margin-right: 8px;
    @media (max-width: 767px) {
        margin-right: 0px;
        text-align: center;
    }
`;

function Footer() {
  return <>
    {/* <Head> */}
    {/*    <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" /> */}
    {/* </Head> */}
    <TitleWrapper>NEVER SETTLE</TitleWrapper>
    </>
}

export default Footer;
