import React from "react";

import Layout from 'components/Layout';
import SectionList from 'components/sections/sectionList'
import SkillSet from 'components/home/skillset';
import WhoAmI from 'components/home/whoami';
import ContactMe from 'components/home/contactme';
import { BaseContainer } from 'components/wrappers';
import { projectsList, historyList, articlesList } from 'components/home/dataConstants';

const AboutMe = () => (
    <Layout>
        <BaseContainer>
            <WhoAmI />
            <SectionList listHeader="ls projects/" taskList={projectsList} collapsed={false} />
            <SectionList listHeader="history" taskList={historyList} collapsed={true} />
            <SectionList listHeader="ls articles/" taskList={articlesList} collapsed={true} />
            <SkillSet/>
            <ContactMe />
        </BaseContainer>
        {/*<Footer />*/}
    </Layout>
);
export default AboutMe;
