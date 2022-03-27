import styled from 'styled-components';

export const BlogWrapper = styled.div`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: #f5f8fa;
    text-shadow: none;
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 5em;
`;

export const BlogSectionHeader = styled.h2`
    font-size: 32px;
    margin: .4em 0;
    font-weight: 500;

    @media (max-width: 983px) {
      font-size: 26px;
    }
`;

export const Separator = styled.hr`
    margin: ${props => props.gap ? props.gap: "16px"} 0;
    border: none;
    background: ${props => props.bg ? props.bg:  '#f5f8fa'};
    height: 2px;
`;