import styled from 'styled-components';
import React from "react";

import { socialList } from '../constants/external';

const BackgroundWrapper = styled.div`
    background-image: linear-gradient(to right, #8E2DE2 , #4A00E0);
    box-shadow: 0px 2px #FFF053;
`;
const UlWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const ListItem = styled.li`
  float: ${props => props.left ? 'left': 'right'};
  padding-right: 4px;
   a {
      display: block;
      color: white;
      text-align: center;
      text-decoration: none;
  }
  a:hover {
  background-color: #111;
}
`;
const ImageWrapper = styled.img`
    padding:8px 10px;
    height:24px;
    width: auto;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    &:hover {
        transform: scale(1.2);
        box-shadow: 0px 0px 8px 2px ${props => props.bgColor};
    }
`;

const NavBar = () => (
    <BackgroundWrapper>
        <UlWrapper>
            {socialList.map(item=> (
                <ListItem key={item.title}>
                    <a href={item.link}><ImageWrapper src={item.imgUrl} bgColor={item.bgColor}/></a>
                </ListItem>
            ))}
        </UlWrapper>
    </BackgroundWrapper>
);

export default NavBar;
