import React, { Component } from 'react';
import styled from 'styled-components';
import Work from './Work';

const WorkListWrap = styled.div`
  height: calc(100% - 30px);
  width: 55vw;
  position: fixed;
  top: 15px;
  right: 0;
  border-left: 1px solid rgba(120,120,120, 0.2);
  box-sizing: border-box;
  overflow: auto;
`

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: [
        {
          id: 'galphi',
          title: '갈피', 
          description: '책을 읽고 날짜별로 기록을 남길 수 있는 독서 일기장 컨셉의 프로젝트입니다.',
          stacks: 'React.js, React-router',
        },
        {
          id: 'reduxrecord',
          title: 'Redux Record 😎', 
          description: '음반 쇼핑몰 컨셉의 프로젝트입니다.',
          stacks: 'React.js, Redux, React-router'
        },
        {
          id: 'jsboard',
          title: 'js-board', 
          description: '순수 Javascript와 jQuery로 구현한 게시판 서비스입니다. 게시물과 댓글을 localStorage에 저장하고 불러올 수 있습니다.',
          stacks: 'jQuery'
        },
        {
          id: 'nouveauriche',
          title: 'Nouveauriche',
          description: `P2P금융 기업 <누보리치>의 웹 퍼블리싱(외주) 작업을 진행했습니다.`,
          stacks: 'HTML, CSS'
        },
        {
          id: 'plusy',
          title: 'Plusy',
          description: `P2P금융 기업 '플러시'의 웹 디자인과 웹 퍼블리싱 업무를 수행했습니다. (현재 서비스가 종료되어 접속이 불가능합니다)`,
          stacks: 'HTML, CSS'
        }
      ]
    }
  }
  render() {
    return (
      <WorkListWrap>
        <ul>
          {this.state.workList.map((work) => {
            return <Work work={work}/>
          })}
        </ul>
      </WorkListWrap>
    );
  }
}

export default WorkList;