import React, { useState } from 'react';
import PlaceCard from '@/components/Card/Card';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {
  Container,
  TabContainerParent,
  TabContainer,
  Tab,
  TabContent,
  PlaceContent,
} from './TabBar.styles';

export default function TabBar({
  name = '산촌',
  distance = '1.2km',
  address = '어딘가',
  number = '010-999-000',
}) {
  const [activeTab, setActiveTab] = useState('reported');

  return (
    <Container>
      <TabContainerParent>
        <TabContainer>
          <Tab
            active={activeTab === 'reported'}
            onClick={() => setActiveTab('reported')}
          >
            제보한 가게
          </Tab>
          <Tab
            active={activeTab === 'review'}
            onClick={() => setActiveTab('review')}
          >
            작성 후기
          </Tab>
          <Tab
            active={activeTab === 'bookmark'}
            onClick={() => setActiveTab('bookmark')}
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
      <PlaceCard />
    </Container>
  );
}
