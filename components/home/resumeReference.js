import React from 'react';

import { Span } from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import styled from 'styled-components';
import CollapsibleSection from '../sections/collapsibleSection';
import { SectionContainer } from '../wrappers';

const StyleLink = styled.a`
  text-decoration: none;
`;

function ResumeReference() {
  return (
    <SectionContainer>
      <CollapsibleSection
        header={<SectionTitle title="cat resume.pdf" />}
        body={
          <StyleLink href="/resume">
            <Span size="18px" color="#EA4C89">
              View Resume
            </Span>
          </StyleLink>
        }
      />
    </SectionContainer>
  );
}

export default ResumeReference;
