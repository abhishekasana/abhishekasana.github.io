import React from 'react';

import { Text } from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import { SectionContainer } from "../wrappers";

function WhoAmI() {
  return <SectionContainer>
        <SectionTitle title="whoami" />
        <Text>
            I’m Abhishek Kasana, a software developer in India.
        </Text>
    </SectionContainer>
}

export default WhoAmI;
