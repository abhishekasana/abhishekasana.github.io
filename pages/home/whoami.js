import React from 'react';
import SectionTitle from '../../components/sectionTitle';
import { Text } from '../../components/webcomps';
import { SectionContainer } from "../../components/wrappers";

const Whoami = () => (
    <SectionContainer>
        <SectionTitle title="whoami" />
        <Text>
            My name is Abhishek Kasana, I'm a 23 years old full stack developer based in Bengaluru, India.
        </Text>
        <Text>
            I'm a massive cyberpunk nerd with an interest in open source and devops.
            In my free time I like to hack on fun projects, play / watch football with friends,
            gulp banana smoothies and take pictures (among other things, like obsessing over my Hacker News karma).
        </Text>
    </SectionContainer>
);

export default Whoami;
