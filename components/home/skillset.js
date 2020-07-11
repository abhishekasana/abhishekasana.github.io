import React from "react";
import styled from 'styled-components';

import { Row, Col, LiWrapper, UlWrapper } from '../webcomps';
import SectionTitle from '../genSection/sectionTitle';
import CollapsibleBar from '../collapsibleBar';
import { SectionContainer } from "../wrappers";
import { skillSetList } from './dataConstants';

const CategoryTitle = styled.h3`
    font-size: 24px;
    margin: 0 0 0.5em;
    color: #54C9FF;
`;

const SkillSet = () => (
    <SectionContainer>
        <CollapsibleBar
            header={<SectionTitle title="cat skills.md" enterSuffix={true}/>}
            body={
                <Row>
                    {skillSetList.map(item => (
                        <Col flexbasis='33%' key={item.title}>
                            <CategoryTitle>{item.title}</CategoryTitle>
                            <UlWrapper startPadding='0px'>
                                {item.value.map(subitem => (
                                    <LiWrapper key={subitem}><span>{subitem}</span></LiWrapper>
                                ))}
                            </UlWrapper>
                        </Col>
                    ))}
                </Row>
            }
        />
    </SectionContainer>
);

export default SkillSet;
