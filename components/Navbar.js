import styled from 'styled-components';
import React from "react";

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

const social_list = [
    {
        title: 'linked-in',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/linkedin.png',
        link: 'www.linkedin.com/in/abhishek-kasana-4a7836106',
        bgColor: '#0073a4',
    },
    {
        title: 'stackoverflow',
        imgUrl: 'https://img.icons8.com/ios/128/ffffff/stackoverflow-filled.png',
        link: 'https://stackoverflow.com/users/9057473/',
        bgColor: '#f48024',
    },
    {
        title: 'Android',
        imgUrl: 'https://img.icons8.com/material/128/ffffff/android-os.png',
        link: 'https://play.google.com/store/apps/dev?id=8404243559462055066',
        bgColor: '#7cb342',
    },
    {
        title: 'twitter',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/twitter-circled.png',
        link: 'https://twitter.com/abhishekasana',
        bgColor: '#00aced',
    },
    {
        title: 'github',
        imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/github.png',
        link: 'https://github.com/abhishekasana',
        bgColor: '#24292d',
    },
];

const NavBar = () => (
    <BackgroundWrapper>
        <UlWrapper>
            {social_list.map(item=> (
                <ListItem key={item.title}>
                    <a href={item.link}><ImageWrapper src={item.imgUrl} bgColor={item.bgColor}/></a>
                </ListItem>
            ))}
        </UlWrapper>
    </BackgroundWrapper>
);

export default NavBar;
