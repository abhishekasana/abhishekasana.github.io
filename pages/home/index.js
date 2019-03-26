import React from "react";
import Layout from '../../components/Layout';
import TaskList from '../../components/taskList'
import { HalfContainer } from '../../components/wrappers';
import styled from 'styled-components';

import SkillSet from './skillset';
import Whoami from './whoami';
import ContactMe from './contactme';
import { projectsList, historyList, articlesList } from './dataConstants';
const TitleWrapper = styled.p`
    font-size: 36px;
    opacity: 0.5;
    font-family: 'Monoton', cursive;
    text-align: right;
    margin-right: 8px;
    @media (max-width: 767px) {
        margin-right: 0px;
        text-align: center;
    }
`;

const Index = () => (
    <Layout>
        <HalfContainer>
            {/*<TitleWrapper>NEVER SETTLE</TitleWrapper>*/}
            <Whoami/>
            <TaskList listHeader="ls projects/" taskList={projectsList} />
            <SkillSet/>
            <TaskList listHeader="history" taskList={historyList} />
            <TaskList listHeader="ls articles/" taskList={articlesList} />
            <ContactMe />
        </HalfContainer>
        <TitleWrapper>NEVER SETTLE</TitleWrapper>
    </Layout>
);
export default Index;
