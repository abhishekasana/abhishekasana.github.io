import styled from "styled-components";

const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
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
    Span,
    ColDiff,
    LiWrapper,
}
