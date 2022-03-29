import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import { SectionContainer } from "../wrappers";

const HeadWrapper = styled.div`
    cursor: pointer;
    & > :last-child::after {
        content: '${props => props.collapsed === true ? '▌': ''}';
        // animation: blinker 1.2s linear infinite;
        color: #FFF053;
        font-family: monospace;
        display: inline-block;
        padding-left: 12px;
    };
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
`;
const SectionWrapper = styled(SectionContainer)`
  margin: ${props => props.style && props.style.margin ? props.style.margin: "inherit"};
`;


class CollapsibleSection extends React.PureComponent {
    static propTypes = {
        header: PropTypes.object.isRequired,
        body: PropTypes.object.isRequired,
        collapsed: PropTypes.bool,
        style: PropTypes.shape({})
    };

    static defaultProps = {
        collapsed: true,
        style: {}
    };

    constructor(props) {
        super(props);
        const { collapsed } = props;

        this.state = {
            collapsed,
        };
    }

    toggleDetailView = () => {
        this.setState(({collapsed}) => ({
            collapsed: !collapsed
        }));
    };

    render() {
        const { header, body, style: {global: globalStyle = {}} } = this.props;
        const { collapsed } = this.state;

        return (
            <SectionWrapper style={globalStyle}>
                <HeadWrapper onClick={() => this.toggleDetailView()} collapsed={collapsed}>
                    {header}
                </HeadWrapper>
                {!collapsed && body}
            </SectionWrapper>
        );
    }

}

export default CollapsibleSection;
