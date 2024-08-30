import React from 'react';

import Link from 'next/link';

import Layout from 'components/Layout';
import { BaseContainer } from 'components/wrappers';
import { Col, Row, Span, Text } from 'components/webcomps';
import styled from 'styled-components';
import { featuredBlogs } from 'constants/external';
import COLORS from 'constants/color';

const BoxWrapper = styled.div`
  display: flex;
  padding: 12px;
  /* box-shadow: 10px -10px 0 -3px #8728e2, 10px -10px #8728e2; */
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  margin-bottom: 16px;
`;
const StyleLink = styled.a`
  text-decoration: none;
`;
const FlexContainer = styled(Row)`
  flex-wrap: unset;
  gap: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: unset;
  }
`;
const BoxIconWrapper = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  margin: auto;
  left: 80%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15;
  z-index: -1;
`;
const BoxTitle = styled(Span)`
  margin-bottom: 4px;
`;

const renderBoxCard = ({ title, description, postedOn, link, icon, subscript }) => (
  <Link key={title} href={link} passHref>
    <StyleLink>
      <BoxWrapper>
        <FlexContainer>
          <BoxTitle size="14px" color={COLORS.GREY}>
            {postedOn}
          </BoxTitle>
          <Col>
            <BoxTitle size="24px" color={COLORS.PURPLE_HIGHLIGHT}>
              #
              <Span size="24px" color={COLORS.LIGHT_WHITE}>
                {' '}
                {title}
              </Span>
            </BoxTitle>
            <Span size="14px" color={COLORS.GREY}>
              {description}
            </Span>
            <Span color={COLORS.PURPLE_HIGHLIGHT} size="14px">
              {subscript}
            </Span>
            <BoxIconWrapper src={icon} />
          </Col>
        </FlexContainer>
      </BoxWrapper>
    </StyleLink>
  </Link>
);

function Home() {
  return (
    <Layout>
      <BaseContainer>
        <br />
        <Text size="32px">Featured Blogs</Text>
        <br />
        {featuredBlogs.map(item => renderBoxCard({ ...item }))}
      </BaseContainer>
    </Layout>
  );
}

export default Home;
