import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  useGetReviewsByUserId,
  useGetReportedByUserId,
  useGetBookmarkedByUserId,
} from '@/hooks/useUser';
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
import getDistance from '@/hooks/useDistance.jsx';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { VEGAN_MENU_TYPES } from '@/constants';
import Loading from '@/components/Loading/Loading';

const TabBar = () => {
  const { ref, inView } = useInView();
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const navigate = useNavigate();

  const {
    data: ReviewsData,
    isError: isReviewsError,
    error: reviewsError,
    isLoading: reviewsLoading,
    isFetchingNextPage: reviewsFetchingNextPage,
    hasNextPage: reviewsHasNextPage,
    fetchNextPage: reviewsFetchNextPage,
  } = useGetReviewsByUserId();
  const {
    data: ReportData,
    isError: isReportError,
    error: reportError,
    isLoading: reportLoading,
    isFetchingNextPage: reportFetchingNextPage,
    hasNextPage: reportHasNextPage,
    fetchNextPage: reportFetchNextPage,
  } = useGetReportedByUserId();
  const {
    data: BookmarkData,
    isError: isBookmarkError,
    error: bookmarkError,
    isLoading: bookmarkLoading,
    isFetchingNextPage: bookmarkFetchingNextPage,
    hasNextPage: bookmarkHasNextPage,
    fetchNextPage: bookmarkFetchNextPage,
  } = useGetBookmarkedByUserId();
  const {
    location: userLocation,
    error: userLocationError,
    isLoading: userLocationLoading,
    reloadLocation: getCurrentPosition,
  } = useCurrentLocation();
  const [activeTab, setActiveTab] = useState('reported');
  const tabContentRef = useRef(null);

  useEffect(() => {
    getCurrentPosition();
  }, []);
  useEffect(() => {
    if (inView && reviewsHasNextPage && !reviewsFetchingNextPage) {
      reviewsFetchNextPage();
    }
    if (inView && reportHasNextPage && !reportFetchingNextPage) {
      reportFetchNextPage();
    }
    if (inView && bookmarkHasNextPage && !bookmarkFetchingNextPage) {
      bookmarkFetchNextPage();
    }
  }, [
    inView,
    reviewsHasNextPage,
    reviewsFetchNextPage,
    reportHasNextPage,
    reportFetchNextPage,
    bookmarkHasNextPage,
    bookmarkFetchNextPage,
  ]);

  if (
    userLocationLoading ||
    ReportData === undefined ||
    ReviewsData === undefined ||
    BookmarkData === undefined
  ) {
    return <Loading />;
  }
  if (userLocationError || isReviewsError || isReportError || isBookmarkError) {
    return <div>Error occurred while loading data.</div>;
  }
  const ReportDataLength = ReportData?.pages[0].reportedPlaces.length;

  const renderReportedPlaces = () => {
    if (ReportDataLength === 0) {
      return (
        <ReviewContent>
          <NoReview>
            <NoReviewText>제보한 가게가 없습니다.</NoReviewText>
          </NoReview>
        </ReviewContent>
      );
    } else {
      return (
        <DataContent>
          {ReportData?.pages.map((page) =>
            page.reportedPlaces.map((report) => {
              const distance =
                getDistance({
                  lat1: userLocation.center.lat,
                  lon1: userLocation.center.lng,
                  lat2: report.location[1],
                  lon2: report.location[0],
                }) / 1000;

              return (
                <PlaceCard
                  key={report._id}
                  name={report.name}
                  veganOption={
                    report.vegan_option
                      ? VEGAN_MENU_TYPES[0]
                      : VEGAN_MENU_TYPES[1]
                  }
                  distance={distance}
                  location={report.address}
                  number={report.tel === '' ? '없음' : report.tel}
                  img={report.category_img.url.basic_url}
                />
              );
            }),
          )}
          <div ref={ref}>
            {reportFetchingNextPage ? (
              <div>Loading more...</div>
            ) : reportHasNextPage ? (
              <div>Load More</div>
            ) : null}
          </div>
        </DataContent>
      );
    }
  };

  const ReviewsDataLength = ReviewsData?.pages[0].reviews.length;
  const renderReviews = () => {
    if (ReviewsDataLength === 0) {
      return (
        <ReviewContent>
          <NoReview>
            <NoReviewText>작성한 리뷰가 없습니다.</NoReviewText>
          </NoReview>
        </ReviewContent>
      );
    } else {
      return (
        <DataContent>
          {ReviewsData?.pages.map((page) =>
            page.reviews.map((review) => (
              <ReviewCard
                key={review._id}
                reviewId={review._id}
                nickname={review.user_id.nickname}
                veganLevel={review.user_id.tag}
                comment={review.content}
                date={review.updatedAt}
                address={review.place_id.name}
                selectedReviewId={selectedReviewId}
                onSelectReviewId={setSelectedReviewId}
                placeId={review.place_id._id}
              />
            )),
          )}
          <div ref={ref}>
            {reviewsFetchingNextPage ? (
              <div>Loading more...</div>
            ) : reviewsHasNextPage ? (
              <div>Load More</div>
            ) : null}
          </div>
        </DataContent>
      );
    }
  };

  const BookmarkDataLength = BookmarkData?.pages[0].bookmarks.length;

  const renderBookmarkedPlaces = () => {
    if (BookmarkDataLength === 0) {
      return (
        <ReviewContent>
          <NoReview>
            <NoReviewText>북마크한 가게가 없습니다.</NoReviewText>
          </NoReview>
        </ReviewContent>
      );
    } else {
      return (
        <DataContent>
          {BookmarkData?.pages.map((page) =>
            page.bookmarks.map((bookmark) => {
              const distance =
                getDistance({
                  lat1: userLocation.center.lat,
                  lon1: userLocation.center.lng,
                  lat2: bookmark.place_id.location.coordinates[1],
                  lon2: bookmark.place_id.location.coordinates[0],
                }) / 1000;

              return (
                <PlaceCard
                  key={bookmark._id}
                  name={bookmark.place_id.name}
                  veganOption={
                    bookmark.place_id.vegan_option
                      ? VEGAN_MENU_TYPES[0]
                      : VEGAN_MENU_TYPES[1]
                  }
                  distance={distance}
                  location={bookmark.place_id.address}
                  number={bookmark.place_id.tel}
                  img={bookmark.place_id.category_img.url.basic_url}
                  onClick={() => {
                    navigate(`/place/${bookmark.place_id._id}`);
                  }}
                />
              );
            }),
          )}
          <div ref={ref}>
            {bookmarkFetchingNextPage ? (
              <div>Loading more...</div>
            ) : bookmarkHasNextPage ? (
              <div>Load More</div>
            ) : null}
          </div>
        </DataContent>
      );
    }
  };
  return (
    <Container>
      <TabContainerParent>
        <TabContainer>
          <Tab
            $active={activeTab === 'reported'}
            onClick={() => setActiveTab('reported')}
          >
            제보한 가게
          </Tab>
          <Tab
            $active={activeTab === 'review'}
            onClick={() => setActiveTab('review')}
          >
            작성 후기
          </Tab>
          <Tab
            $active={activeTab === 'bookmark'}
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
        {activeTab === 'reported' && renderReportedPlaces()}
        {activeTab === 'review' && renderReviews()}
        {activeTab === 'bookmark' && renderBookmarkedPlaces()}
      </TabContent>
    </Container>
  );
};

export default TabBar;
