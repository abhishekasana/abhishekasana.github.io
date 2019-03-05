import styled from 'styled-components';
import SectionTitle from '../../components/sectionTitle';
import { Row, ColDiff, LiWrapper, UlWrapper } from '../../components/webcomps';
import { SectionContainer } from "../../components/wrappers";

import { skillsetList } from './dataConstants';

const CategoryTitle = styled.h3`
    font-size: 1.8em;
    margin: 0 0 0.5em;
    color: #54C9FF;
`;

const Skillset = () => (
    <SectionContainer>
        <SectionTitle title="cat skills.md" />
        <Row>
            {skillsetList.map(item => (
                <ColDiff key={item.title}>
                    <CategoryTitle>{item.title}</CategoryTitle>
                    <UlWrapper startPadding='0px'>
                      {item.value.map(subitem => (
                          <LiWrapper key={subitem}><span>{subitem}</span></LiWrapper>
                      ))}
                    </UlWrapper>
                </ColDiff>
            ))}
        </Row>
    </SectionContainer>
);

export default Skillset;
