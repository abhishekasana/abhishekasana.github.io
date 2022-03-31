import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled.h1`
  font-size: 70px;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 3%;

  @media (max-width: 1024px) {
    font-size: 54px;
  }

  @media (max-width: 767px) {
    font-size: 42px;
  }
`;

function Title({ title }) {
  return <TitleWrapper>
        {title}
    </TitleWrapper>
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};
Title.defaultProps = {
};

export default Title;
