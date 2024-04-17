import api from './utils/axiosInstance';
import {
  getAllPlaces,
  fetchPlaces,
  getPlaceData,
  getBookmarkByPlaceId,
} from './api/placeApi';
import {
  getReviewsByPlaceId,
  postReview,
  deleteReview,
  updateReview,
  getMyReviews,
} from './api/reviewApi';
import {
  getUserData,
  updateUserData,
  getReviewsByUserId,
  getReportedByUserId,
  getBookmarkedByUserId,
  postBookmark,
  deleteBookmark,
  updateComplaint,
} from './api/userInfoApi';
import getPlacesWithDistance from './service/distance';
import { postAuth } from './api/authApi';

export {
  api,
  postAuth,
  fetchPlaces,
  getAllPlaces,
  getPlacesWithDistance,
  getPlaceData,
  getReviewsByPlaceId,
  postReview,
  deleteReview,
  getMyReviews,
  updateReview,
  getUserData,
  updateUserData,
  getReviewsByUserId,
  getReportedByUserId,
  getBookmarkedByUserId,
  postBookmark,
  deleteBookmark,
  getBookmarkByPlaceId,
  updateComplaint,
};
