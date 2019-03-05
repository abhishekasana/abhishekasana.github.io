import styled from 'styled-components';

const Container = styled.div`
    height: inherit;
    margin: 0 auto;
    padding: 16px;
`;

const CompressContainer = styled(Container)`
    @media (min-width: 768px) {
        width: 80%;
        margin: 16px;
    }
`;
const HalfContainer = styled(Container)`
  @media (min-width: 768px) {
    max-width: 1028px;
    margin: 32px;
  }
`;
const SectionContainer = styled.div`
  margin-bottom: 2em !important;
`;
export {
    Container,
    CompressContainer,
    SectionContainer,
    HalfContainer,
};
