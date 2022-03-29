import React from "react";

import Link from 'next/link';

import Layout from 'components/Layout';
import { BaseContainer } from 'components/wrappers';
import {Col, Row, Span, Text} from "components/webcomps";
import styled from "styled-components";
import {featuredBlogs} from "constants/external";
import COLORS from "constants/color";

const BoxWrapper = styled.div`
  display: flex;
  padding: 12px;
  /* box-shadow: 10px -10px 0 -3px #8728e2, 10px -10px #8728e2; */
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  border: 3px solid ${COLORS.NEON_PURPLE};
  min-height: 128px;
  position: relative;
  margin-bottom: 16px;
`;
const StyleLink = styled.a`
  text-decoration: none;
`;
const SubScriptText = styled(Text)`
  margin: 6px 0 0 0;
`;
const ColWrapper = styled(Col)`
  flex-basis: 100%;
  justify-content: flex-start;
`;
const BoxIconWrapper = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  margin: auto;
  left: 80%;
  top: 50%;
  transform: translate(-50%,-50%);
  opacity: 0.4;
  z-index: -1;
`;
const BoxTitle = styled(Span)`
    margin-bottom: 12px;
`;

const renderBoxCard = ({title, description, link, icon, subscript}) => (
    <Link href={link} passHref>
        <StyleLink>
            <BoxWrapper key={title}>
                <Row>
                    <Col>
                        <ColWrapper>
                            <BoxTitle size="26px" color={COLORS.NEON_PURPLE}>{title}</BoxTitle>
                            <Span size="16px" color={COLORS.NEON_PURPLE}>
                                {description}
                            </Span>
                        </ColWrapper>
                        <SubScriptText color="#8728e2" size="14px">{subscript}</SubScriptText>
                        <BoxIconWrapper src={icon} />
                    </Col>
                </Row>
            </BoxWrapper>
        </StyleLink>
    </Link>
)


function Home() {
  return <Layout>
        <BaseContainer>
            <br/>
            <Text size="32px">Featured Blogs</Text>
            <br/>
            <br/>
            {featuredBlogs.map((item)=> renderBoxCard({...item}))}
        </BaseContainer>
    </Layout>
}
export default Home;
