import React from "react";
import { LiWrapper, Span, UlWrapper } from "../webcomps";
import { SectionContainer } from "../wrappers";
import PropTypes from "prop-types";
import styled from 'styled-components';

import SectionTitle from "./sectionTitle";
import CollapsibleSection from './collapsibleSection';

const StyleLink = styled.a`
    text-decoration: none;
`;

class SectionList extends React.PureComponent {
    static propTypes = {
        listHeader: PropTypes.string.isRequired,
        taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
        collapsed: PropTypes.bool
    };
    static defaultProps = {
        collapsed: true,
    };

    renderTask = (taskList) => (
        <UlWrapper>
            {taskList.map(item => (
                <LiWrapper key={item.title}>
                    <Span>{item.title[0]}</Span>
                    <StyleLink href={item.link}>
                        <Span size="18px" color={item.hexCode}>{item.highlight}</Span>
                    </StyleLink>
                    <Span size="18px">{item.title[1]}</Span>
                </LiWrapper>
            ))}
        </UlWrapper>
    );

    render() {
        const { listHeader, taskList, collapsed } = this.props;
        const updatedTaskList = taskList.map(task => ({...task, title : task.title.split(task.highlight)}));

        return (
            <SectionContainer>
                <CollapsibleSection
                    header={<SectionTitle title={listHeader}/>}
                    body={this.renderTask(updatedTaskList)}
                    collapsed={collapsed}
                />
            </SectionContainer>
        );
    }

}

export default SectionList;
