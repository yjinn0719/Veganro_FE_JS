import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/router';
import {
  HomePage,
  AuthPage,
  SignUpPage,
  AddPlacePage,
  ReviewPage,
  SearchPage,
  PlacePage,
  PlaceDetailPage,
  MyPage,
  EditMyPage,
  NotFound,
} from '@/pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.MAIN} element={<HomePage />} />
        <Route path={PATH.AUTH} element={<AuthPage />} />
        <Route path={PATH.SIGNUP} element={<SignUpPage />} />
        <Route path={PATH.ADDPLACE} element={<AddPlacePage />} />
        <Route path={PATH.REVIEW} element={<ReviewPage />} />
        <Route path={PATH.SEARCH} element={<SearchPage />} />
        <Route path={PATH.PLACELISTS} element={<PlacePage />} />
        <Route path={PATH.PLACEDETAIL} element={<PlaceDetailPage />} />
        <Route path={PATH.MY} element={<MyPage />} />
        <Route path={PATH.MYEDIT} element={<EditMyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
