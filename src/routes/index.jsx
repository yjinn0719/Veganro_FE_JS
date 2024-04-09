import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/router';
import Home from '@/pages/Home/Home';
import AddPlace from '@/pages/AddPlace/AddPlace';
import Review from '@/pages/ReviewDetail/ReviewDetail';
import PlaceDetail from '@/pages/PlaceDetail/PlaceDetail';
import MyPage from '@/pages/MyPage/MyPage';
import EditMyPage from '@/pages/EditMyPage/EditMyPage';

const MyRouter = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      <Route path={PATH.ADDPLACE} element={<AddPlace />} />
      <Route path={PATH.REVIEW} element={<Review />} />
      <Route path={PATH.PLACEDETAIL} element={<PlaceDetail />} />
      <Route path={PATH.MY} element={<MyPage />} />
      <Route path={PATH.MYEDIT} element={<EditMyPage />} />
    </Routes>
  );
};

export default MyRouter;
