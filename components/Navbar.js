import React from "react";

import styled from 'styled-components';

import {socialList, menuList} from 'constants/external';
import {Row, Span} from "./webcomps";
import COLORS from "constants/color";

const BackgroundWrapper = styled.div`
    background-image: linear-gradient(to right, #8E2DE2 , #4A00E0);
    box-shadow: 0 2px #FFF053;
`;
const RowWrapper = styled(Row)`
  @media (min-width: 1025px) {
    max-width: 960px;
  }
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  overflow: hidden;
`;
const HomeAnchorWrapper = styled.a`
  display: block;
  width: 32px;
  height: auto;
  margin: 6px 32px 6px -2px;
  text-decoration: none;
  
  @media (max-width: 1024px) {
    margin: 6px 32px 6px 12px;
  }
`;
const MenuItemWrapper = styled.div`
  padding: 12px 12px 12px 0;
  margin: auto;
`;
const StickRow = styled(Row)`
  margin-left: ${props => props.stickRight ? "auto" : "unset"};
  margin-right: ${props => props.stickLeft ? "auto" : "unset"};
`;
const BaseIconAnchorWrapper = styled.a`
  height: 24px;
  width: 24px;
  font-size: 20px;

  @media (max-width: 1024px) {
    height: 20px;
    font-size: 16px;
  }

`;
const IconAnchorWrapper = styled(BaseIconAnchorWrapper)`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 12px;
  transition: .5s;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  
  &:hover {
    transform: scale(1.1);
    background-color: ${COLORS.DARK_PURPLE};
    box-shadow: 0 0 8px 2px ${props => props.bgColor};
  }
`;
const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
`;
const StyleLink = styled.a`
  text-decoration: none;
`;

const renderRelItems = (listItems) => (
    listItems.map(({title, bgColor, imgUrl, link})=> (
        <IconAnchorWrapper key={title} href={link} bgColor={bgColor}>
            <ImageWrapper alt={title} src={imgUrl} bgColor={bgColor}/>
        </IconAnchorWrapper>
    ))
);
const renderMenuItems = (listItems) => (
    listItems.map(({title, bgColor, link}) => (
        <MenuItemWrapper key={title}>
            <StyleLink href={link}>
                <Span size="18px" color={bgColor}>{title}</Span>
            </StyleLink>
        </MenuItemWrapper>
    ))
)

const NavBar = () => (
    <BackgroundWrapper>
        <RowWrapper>
            <Row>
                <HomeAnchorWrapper key="home" href="/">
                    <img
                        alt="Home"
                        style={{"max-width": "100%"}} src="https://img.icons8.com/ios-filled/128/ffffff/k.png"
                    />
                </HomeAnchorWrapper>
                {renderMenuItems(menuList)}
            </Row>
            <StickRow stickRight={true}>
                {renderRelItems(socialList)}
            </StickRow>
        </RowWrapper>
    </BackgroundWrapper>
);

export default NavBar;
