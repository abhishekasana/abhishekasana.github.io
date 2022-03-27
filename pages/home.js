import React from "react";

import Layout from 'components/Layout';
import { BaseContainer } from 'components/wrappers';
import {Col, Row, Span, Text} from "components/webcomps";
import {Separator} from "components/blog/wrapper";
import styled from "styled-components";
import {featuredBlogs} from "constants/external";
import COLORS from "constants/color";

const StyleLink = styled.a`
  text-decoration: none;
  color: white;
`;
const BoxLeftCol = styled(Col)`
  flex: 1;
  justify-content: space-between;
`;
const BoxIconWrapper = styled.img`
  width: 72px;
  height: 72px;
  margin: auto;

  @media (min-width: 1025px) {
    padding: 12px 24px;
  }
`;
const BoxTitle = styled(Span)`
    margin-bottom: 12px;
`;

const renderBoxCard = ({title, description, link, icon, subscript}) => (
    <StyleLink href={link}>
        <Col>
            <Row>
                <BoxLeftCol mFlexbasis="min-content">
                    <BoxTitle size="26px">{title}</BoxTitle>
                    <Span size="16px">
                        {description}
                    </Span>
                </BoxLeftCol>
                <BoxIconWrapper src={icon} />
            </Row>
            <Text size="14px">{subscript}</Text>
        </Col>
    </StyleLink>
)


const Home = () => (
    <Layout>
        <BaseContainer>
            <br/>
            <Text size="32px">Featured Blogs</Text>
            <br/>
            <br/>
            <Separator gap="6px" bg={COLORS.PINK} />
            {featuredBlogs.map((item)=> renderBoxCard({...item}))}
            <Separator gap="6px" bg={COLORS.PINK} />
        </BaseContainer>
    </Layout>
);
export default Home;
