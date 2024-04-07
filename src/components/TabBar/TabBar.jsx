import React, { useState, useCallback } from 'react';
import {
  Container,
  TabContainerParent,
  TabContainer,
  Tab,
  TabContent,
  PlaceContent,
} from './TabBar.styles';

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
