import React from 'react';

import { Text } from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import { SectionContainer } from "../wrappers";

function WhoAmI() {
  return <SectionContainer>
        <SectionTitle title="whoami" />
        <Text>
            I’m Abhishek Kasana, a software developer based in India.
            <br/>
            My motivation behind writing these blogs is, as a developer when solving problems the solution
            which I implement are not always from ground up, these base layer's over which I build upon is a fascinating
            piece of code which I like to understand & tinker with. This helps we as a developer to solve my future
            problems with new perspective and dimensions.
        </Text>
    </SectionContainer>
}

export default WhoAmI;
