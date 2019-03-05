import React from "react";
import { LiWrapper, Span } from "./webcomps";
import { SectionContainer } from "./wrappers";
import PropTypes from "prop-types";
import styled from 'styled-components';

import SectionTitle from "./sectionTitle";

const StyleLink = styled.a`
    text-decoration: none;
`;
const UlWrapper = styled.ul`
  @media (max-width: 767px) {
    padding-left: 0px;
  }
`;
const TaskList = (props) => {
  const { listHeader, taskList } = props;
  const updatedTaskList = taskList.map(task => ({...task, title : task.title.split(task.hightLight)}));
  return(
    <SectionContainer>
      <SectionTitle title={listHeader}/>
      <UlWrapper>
        {updatedTaskList.map(item => (
          <LiWrapper key={item.title}>
            <Span>{item.title[0]}</Span>
            <StyleLink href={item.link}>
              <Span color={item.hexCode}>{item.hightLight}</Span>
            </StyleLink>
            <Span>{item.title[1]}</Span>
          </LiWrapper>
        ))}
      </UlWrapper>
    </SectionContainer>
  );
};

TaskList.propTypes = {
    listHeader: PropTypes.string.isRequired,
    taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
