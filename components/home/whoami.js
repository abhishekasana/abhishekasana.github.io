import React from 'react';

import { Text } from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import { SectionContainer } from '../wrappers';

function WhoAmI() {
  return (
    <SectionContainer>
      <SectionTitle title="whoami" />
      <Text>
        I'm Abhishek Kasana, a software developer who thrives on untangling complexity and
        exploring the inner workings of systems.
        <br />
        My passion lies in operating systems, compilers, networking, and security
        engineering. I love diving deep into these areas to uncover their intricacies and
        drive innovation.
        <br />
        <br />
        As a tinkerer at heart, I’m fascinated by how things work, whether it's a
        sophisticated piece of code or a new tech challenge. This curiosity fuels my
        creativity and problem-solving skills.
        <br />
        My blog features a series called "Under the Hood," where I simplify and decipher
        complex or cutting-edge systems I've built or encountered. It's my way of marking
        key insights and sharing the journey, both for myself and for others who share a
        similar curiosity.
      </Text>
    </SectionContainer>
  );
}

export default WhoAmI;
