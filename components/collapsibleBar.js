import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import { SectionContainer } from "./wrappers";

const HeadWrapper = styled.div`
    cursor: pointer;
    & > :last-child::after {
        content: '${props => props.collapsed === true ? '▌': ''}';
        // animation: blinker 1.2s linear infinite;
        color: #FFF053;
        display: inline-block;
        padding-left: 12px;
    };
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
`;

class CollapsibleBar extends React.PureComponent {
    static propTypes = {
        header: PropTypes.elementType.isRequired,
        body: PropTypes.elementType.isRequired,
        collapsed: PropTypes.bool,
    };
    static defaultProps = {
        collapsed: true
    };

    constructor(props) {
        super(props);
        const { collapsed } = props;

        this.state = {
            collapsed: collapsed,
        };
    }

    toggleDetailView = () => {
        const { collapsed } = this.state;

        this.setState({
            collapsed: !collapsed
        });
    };

    render() {
        const { header, body } = this.props;
        const { collapsed } = this.state;

        return (
            <SectionContainer>
                <HeadWrapper onClick={() => this.toggleDetailView()} collapsed={collapsed}>
                    {header}
                </HeadWrapper>
                {!collapsed && body}
            </SectionContainer>
        );
    }

}

export default CollapsibleBar;
