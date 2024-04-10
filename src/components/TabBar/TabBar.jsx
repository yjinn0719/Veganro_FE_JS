import React, { useState, useRef } from 'react';
import {
  useGetReviewsByUserId,
  useGetReportedByUserId,
  useGetBookmarkedByUserId,
} from '../../hooks/useUser';
import PlaceCard from '@/components/Card/Card';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {
  Container,
  TabContainerParent,
  TabContainer,
  Tab,
  TabContent,
  DataContent,
} from './TabBar.styles';
import {
  ReviewContent,
  NoReview,
  NoReviewText,
} from '@/components/Review/Review.styles';
import getDistance from '../../hooks/useDistance';
import useCurrentLocation from '../../hooks/useCurrentLocation';

export default function TabBar({}) {
  const { data: ReviewsData, isError, error } = useGetReviewsByUserId();
  const { data: ReportData } = useGetReportedByUserId();
  const { data: BookmarkData } = useGetBookmarkedByUserId();
  const {
    location: userLocation,
    error: userLocationError,
    isLoading: userLocationLoading,
    reloadLocation: getCurrentPosition,
  } = useCurrentLocation();
  console.log(ReviewsData, ReportData, BookmarkData);
  const [activeTab, setActiveTab] = useState('reported');
  const tabContentRef = useRef(null);

  if (
    BookmarkData === undefined ||
    ReportData === undefined ||
    ReviewsData === undefined
  ) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

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
      <TabContent
        ref={tabContentRef}
        style={{ display: activeTab ? 'block' : 'none' }}
      >
        {activeTab === 'reported' && (
          <>
            {ReportData === undefined || ReportData.length === 0 ? (
              <ReviewContent>
                <NoReview>
                  <NoReviewText>제보한 가게가 없습니다.</NoReviewText>
                </NoReview>
              </ReviewContent>
            ) : (
              <DataContent>
                {ReportData.map((report) => (
                  <PlaceCard
                    key={report._id}
                    name={report.name}
                    veganOption={report.vegan_option ? '일부 비건' : '비건'}
                    distance={
                      getDistance({
                        lat1: userLocation.center.lat,
                        lon1: userLocation.center.lon,
                        lat2: report.location[1],
                        lon2: report.location[0],
                      }) / 1000
                    }
                    location={report.address}
                    number={report.tel}
                    img={report.category_img.url.basic_url}
                  />
                ))}
              </DataContent>
            )}
          </>
        )}
        {activeTab === 'review' && (
          <>
            {ReviewsData === undefined || ReviewsData.length === 0 ? (
              <ReviewContent>
                <NoReview>
                  <NoReviewText>작성한 리뷰가 없습니다.</NoReviewText>
                </NoReview>
              </ReviewContent>
            ) : (
              <DataContent>
                {ReviewsData.map((review) => (
                  <ReviewCard
                    key={review._id}
                    nickname={review.author}
                    veganLevel={review.author_tag}
                    comment={review.content}
                    date={review.updatedAt}
                    click={() => {
                      setSelectedReviewIndex(index);
                      toggleEditDrawer();
                    }}
                  />
                ))}
              </DataContent>
            )}
          </>
        )}
        {activeTab === 'bookmark' && (
          <>
            {BookmarkData === undefined || BookmarkData.length === 0 ? (
              <ReviewContent>
                <NoReview>
                  <NoReviewText>북마크한 가게가 없습니다.</NoReviewText>
                </NoReview>
              </ReviewContent>
            ) : (
              <DataContent>
                {BookmarkData.map((bookmark) => (
                  <PlaceCard
                    key={bookmark._id}
                    name={bookmark.place_id.name}
                    veganOption={
                      bookmark.place_id.vegan_option ? '일부 비건' : '비건'
                    }
                    distance={
                      getDistance({
                        lat1: userLocation.center.lat,
                        lon1: userLocation.center.lon,
                        lat2: bookmark.place_id.location.coordinates[1],
                        lon2: bookmark.place_id.location.coordinates[0],
                      }) / 1000
                    }
                    location={bookmark.place_id.address}
                    number={bookmark.place_id.tel}
                    img={bookmark.place_id.category_img.url.basic_url}
                  />
                ))}
              </DataContent>
            )}
          </>
        )}
      </TabContent>
    </Container>
  );
}
