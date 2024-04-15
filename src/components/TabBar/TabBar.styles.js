import styled from 'styled-components';
import React from 'react';

const PlaceContent = React.memo(styled.div`
  display: flex;
  flex-direction: column;
`);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
`;

const TabContainerParent = styled.div`
  position: sticky;
  top: 48px;
  z-index: 999;
  background-color: #fff;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div`
  flex: 1 1 0;
  height: 43px;
  padding: 12px;
  border-bottom: ${(props) =>
    props.$active ? '2px #4F8337 solid' : '1px #EFEFEF solid'};
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  color: ${(props) => (props.$active ? '#4F8337' : '#ADADAD')};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
`;

const TabContent = styled.div`
  padding: 20px;
`;

const DataContent = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export {
  PlaceContent,
  Container,
  TabContainerParent,
  TabContainer,
  Tab,
  TabContent,
  DataContent,
};
