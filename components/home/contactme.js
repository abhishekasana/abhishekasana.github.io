import React from 'react';

import styled from "styled-components";
import {Span, Text} from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import { SectionContainer } from "../wrappers";

const StyleLink = styled.a`
  text-decoration: none;
`;

export default function() {
  return <SectionContainer>
      <SectionTitle title='cat Contact.md'/>
      <Text>
          You can find me on
          &nbsp;
          <StyleLink href="https://twitter.com/abhishekasana">
            <Span size="18px" color="#EA4C89">Twitter</Span>
          </StyleLink>
          , or email me at
          &nbsp;
          <StyleLink href="mailto:abhishekasana@gmail.com">
              <Span size="18px" color="#EA4C89">abhishekasana@gmail.com</Span>
          </StyleLink>
      </Text>
  </SectionContainer>
};
