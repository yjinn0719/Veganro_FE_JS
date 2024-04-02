import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export default function TabBar() {
  const [activeTab, setActiveTab] = useState('reported');

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <Container>
      <TabContainerParent>
        <TabContainer>
          <Tab
            active={activeTab === 'reported'}
            onClick={() => handleTabClick('reported')}
          >
            제보한 가게
          </Tab>
          <Tab
            active={activeTab === 'review'}
            onClick={() => handleTabClick('review')}
          >
            작성 후기
          </Tab>
          <Tab
            active={activeTab === 'bookmark'}
            onClick={() => handleTabClick('bookmark')}
          >
            북마크
          </Tab>
        </TabContainer>
      </TabContainerParent>
      <TabContent>
        {activeTab === 'reported' && (
          <PlaceContent>
            <div>제보한 가게 데이터</div>
          </PlaceContent>
        )}
        {activeTab === 'review' && <div>작성 후기 데이터</div>}
        {activeTab === 'bookmark' && <div>북마크 데이터</div>}
      </TabContent>
    </Container>
  );
}

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
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
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
    props.active ? '2px #4F8337 solid' : '1px #EFEFEF solid'};
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  color: ${(props) => (props.active ? '#4F8337' : '#ADADAD')};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
`;

const TabContent = styled.div`
  padding: 20px;
`;
