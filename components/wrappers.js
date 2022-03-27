import styled from 'styled-components';

const Container = styled.div`
    height: inherit;
    margin: 0 auto;
    padding: 16px;
`;

const BaseContainer = styled(Container)`
  // controls base layout of all pages excluding nav
  @media (min-width: 1025px) {
    max-width: 960px;
    padding: 0;
  }
  margin: auto;
`;

const SectionContainer = styled.div`
  margin-bottom: 2em !important;
`;
export {
    Container,
    SectionContainer,
    BaseContainer,
};
