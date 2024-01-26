import React from "react";

import Layout from 'components/Layout';
import SectionList from 'components/sections/sectionList'
import SkillSet from 'components/home/skillset';
import WhoAmI from 'components/home/whoami';
import ContactMe from 'components/home/contactme';
import { BaseContainer } from 'components/wrappers';
import { historyList } from 'components/home/dataConstants';

function AboutMe() {
  return <Layout>
        <BaseContainer>
            <WhoAmI />
            <SectionList listHeader="history" taskList={historyList} collapsed={false} />
            <SkillSet/>
            <ContactMe />
        </BaseContainer>
    </Layout>
}
export default AboutMe;
