import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled.h2`
    font-size: 2.2em;
    margin: 0px 0px .5em;
    font-weight: 500;
    & > :first-child {
        color: #FFF053;
    };
    & > * {
        display: inline;
    };
    @media(max-width: 767px) {
        font-size: 1.8em;
    }

`;
const SpanWrapper = styled.span`
    display: inline-block;
`;
const SectionTitle =  ({ title }) => (
    <TitleWrapper>
        <SpanWrapper>zerodark@kasana:~$</SpanWrapper>
        <SpanWrapper>&nbsp;{title}</SpanWrapper>
    </TitleWrapper>
);

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle;
