import React from 'react';

import { Text } from '../webcomps';
import SectionTitle from '../genSection/sectionTitle';
import { SectionContainer } from "../wrappers";

const WhoAmI = () => (
    <SectionContainer>
        <SectionTitle title="whoami" />
        <Text>
            My name is Abhishek Kasana, I'm a full stack developer based in Bengaluru, India.
        </Text>
        <Text>
            WIP
        </Text>
    </SectionContainer>
);

export default WhoAmI;
