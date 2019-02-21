import React from 'react';
import SectionTitle from '../../components/sectionTitle';
import { Text } from '../../components/webcomps';
import { SectionContainer } from "../../components/wrappers";

export default () => (
  <SectionContainer>
      <SectionTitle title='cat Contact.md'/>
      <Text>
          I'm currently looking for remote or LDN/MTL/EU based work, so if you're a cool
          startup looking for an always curious passionate dev, ping me on Github and Twitter.
          Or, you can get in touch via E-mail.
      </Text>
  </SectionContainer>
);
