import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled.h2`
    font-size: 32px;
    margin: 0 0 .5em;
    font-weight: 500;
    & > :first-child {
        color: #FFF053;
    };
    
    @media(max-width: 767px) {
      font-size: 26px;
    }
`;
const SpanWrapper = styled.span`
    display: inline-block;
    vertical-align: middle;
`;

function SectionTitle({ title }) {
  return <TitleWrapper>
        <SpanWrapper>zd@kasana:~$</SpanWrapper>
        <SpanWrapper>&nbsp;{title}</SpanWrapper>
    </TitleWrapper>
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
SectionTitle.defaultProps = {
};

export default SectionTitle;
