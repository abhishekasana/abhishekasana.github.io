import React from 'react';

import { Text } from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import { SectionContainer } from '../wrappers';

function WhoAmI() {
  return (
    <SectionContainer>
      <SectionTitle title="whoami" />
      <Text>
        I'm Abhishek Kasana, a programmer and tinkerer with a deep interest in operating
        systems, compilers, networking, and security engineering.
        <br />
        I enjoy untangling complexity and exploring the inner workings of systems.
        <br />
        <br />
        My blog is where I share insights on the complex systems I've worked on or
        discovered, offering a glimpse into the details for those who share my curiosity.
      </Text>
    </SectionContainer>
  );
}

export default WhoAmI;
