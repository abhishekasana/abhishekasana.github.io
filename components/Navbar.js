import React from 'react';

import { Link } from 'routes';
import styled from 'styled-components';

import { socialList, menuList } from 'constants/external';
import COLORS from 'constants/color';
import { Row, Span } from './webcomps';

const BackgroundWrapper = styled.div`
    //background-image: linear-gradient(to right, #8E2DE2 , #4A00E0);
    background: ${COLORS.DARK_SLATE_BLUE}
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: auto;
  font-size: 24px;
  margin: 6px 18px 6px 0;
  text-decoration: none;
  border-radius: 2px;
  border: 3px solid #bd93f9;
  color: inherit;
  @media (max-width: 1024px) {
    margin: 6px 18px 6px 16px;
  }
`;
const MenuItemWrapper = styled.div`
  padding: 12px 12px 12px 0;
  margin: auto;
`;
const StickRow = styled(Row)`
  margin-left: ${props => (props.stickRight ? 'auto' : 'unset')};
  margin-right: ${props => (props.stickLeft ? 'auto' : 'unset')};
`;
const IconAnchorWrapper = styled.a`
  height: 25px;
  width: 25px;
  padding: 12px;
  display: block;
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    background-color: ${COLORS.DARK_PURPLE};
    box-shadow: 0 0 8px 2px ${props => props.bgColor};
  }

  @media (max-width: 1024px) {
    padding: 12px 6px;
  }
`;
const ImageWrapper = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const StyleLink = styled.a`
  text-decoration: none;
`;

const renderRelItems = listItems =>
  listItems.map(({ title, bgColor, imgUrl, link }) => (
    <IconAnchorWrapper key={title} href={link} bgColor={bgColor}>
      <ImageWrapper alt={title} src={imgUrl} bgColor={bgColor} />
    </IconAnchorWrapper>
  ));
const renderMenuItems = listItems =>
  listItems.map(({ title, bgColor, link }) => (
    <MenuItemWrapper key={title}>
      <Link to={link} href={link} passHref>
        <StyleLink>
          <Span size="18px" color={bgColor}>
            {title}
          </Span>
        </StyleLink>
      </Link>
    </MenuItemWrapper>
  ));

function NavBar() {
  return (
    <BackgroundWrapper>
      <RowWrapper>
        <Row>
          <Link to="home" href="/" passHref>
            <HomeAnchorWrapper>K</HomeAnchorWrapper>
          </Link>
          {renderMenuItems(menuList)}
        </Row>
        <StickRow stickRight>{renderRelItems(socialList)}</StickRow>
      </RowWrapper>
    </BackgroundWrapper>
  );
}

export default NavBar;
