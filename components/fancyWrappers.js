import styled from "styled-components";
import COLORS from "../constants/color";

const Snippet = styled.div`
    font: normal 16px monospace;
    background-color: ${COLORS.LIGHT_PURPLE};
    border: 1px solid ${COLORS.LIGHT_WHITE};
    padding: 12px;
    margin: 16px 0;
    border-radius: 2px;
    white-space: pre-wrap;
    overflow: auto;
`;

const ShellCode = styled.code`
    span::before {
        content: "$ "
    }
`;

const StyleLink = styled.a`
    text-decoration-line: underline;
    text-decoration-color: ${COLORS.L_TINT_PURPLE};
    color: ${COLORS.L_TINT_PURPLE};
`;

const InlineImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: ${props => props.mxWidth ? props.mxWidth: "128px"};
    max-height: ${props => props.mxHeight ? props.mxHeight: "128px"};;
`;

export {
    Snippet,
    ShellCode,
    StyleLink,
    InlineImage,
};
