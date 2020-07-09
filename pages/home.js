import React from "react";

import Layout from '../components/Layout';
import TaskList from '../components/taskList'
import SkillSet from '../components/home/skillset';
import Whoami from '../components/home/whoami';
import ContactMe from '../components/home/contactme';
import Footer from '../components/footer';
import { HalfContainer } from '../components/wrappers';
import { projectsList, historyList, articlesList } from '../components/home/dataConstants';

const Home = () => (
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
        <Footer />
    </Layout>
);
export default Home;
