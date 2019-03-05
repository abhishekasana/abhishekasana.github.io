import styled from "styled-components";

const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Col = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
`;

const ColDiff = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-basis: 33%;
    flex-direction: column;

    @media (max-width: 767px) {
        flex-basis: 100%;
    };
`;

const UlWrapper = styled.ul`
  padding-left: ${props => props.startPadding ? props.startPadding : '26px'};
  margin: 0px;
  @media (max-width: 767px) {
    padding-left: 12px;
  }
`;

const LiWrapper = styled.li`
    color: #54C9FF;
    margin-bottom: .7em;
    list-style: none;
    &:before {
        content: '~';
        margin-right: 1rem;
    };
    span {
        color: #fff;
    }
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size: '18px')};
`;

const Span = styled.span`
  font-size: ${props => (props.size ? props.size: '18px')};
  color: ${props => props.color} !important;
`;


export {
    Row,
    Text,
    Col,
    Span,
    ColDiff,
    LiWrapper,
    UlWrapper,
}
