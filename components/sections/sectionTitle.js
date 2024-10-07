import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled.h2`
  font-size: 32px;
  font-weight: normal;
  margin: 0 0 0.5em;
  & > :first-child {
    color: #fff053;
  }

  @media (max-width: 767px) {
    font-size: 26px;
  }
`;
const SpanWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  opacity: ${props => (props.transparency ? props.transparency : 1)};
`;

function SectionTitle({ title }) {
  return (
    <TitleWrapper>
      <SpanWrapper transparency={0.5}>zd@kasana:~$</SpanWrapper>
      <SpanWrapper>&nbsp;{title}</SpanWrapper>
    </TitleWrapper>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
SectionTitle.defaultProps = {};

export default SectionTitle;
