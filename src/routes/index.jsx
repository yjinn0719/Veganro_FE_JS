import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/router';
import Home from '@/pages/Home/Home';
// import Auth from '@/pages/Auth';
// import SignUp from '@/pages/SignUp';
// import AddPlace from '@/pages/AddPlace';
import ReviewDetail from '@/components/Review/Review';
// import Search from '@/pages/Search';
// import Place from '@/pages/Place';
import PlaceDetail from '@/pages/PlaceDetail/PlaceDetail';
// import MyPage from '@/pages/MyPage';
// import EditMyPage from '@/pages/EditMyPage';
// import NotFound from '@/pages/NotFound';

const MyRouter = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      <Route path={PATH.REVIEW} element={<ReviewDetail />} />

      <Route path={PATH.PLACEDETAIL} element={<PlaceDetail />} />
    </Routes>
  );
};

export default MyRouter;
