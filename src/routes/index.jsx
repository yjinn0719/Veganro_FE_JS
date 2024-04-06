import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/router';
import Home from '@/pages/Home/Home';
// import Auth from '@/pages/Auth';
// import SignUp from '@/pages/SignUp';
// import AddPlace from '@/pages/AddPlace';
// import Review from '@/pages/Review';
// import Search from '@/pages/Search';
// import Place from '@/pages/Place';
// import PlaceDetail from '@/pages/PlaceDetail';
// import MyPage from '@/pages/MyPage';
// import EditMyPage from '@/pages/EditMyPage';
// import NotFound from '@/pages/NotFound';

const MyRouter = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      {/* <Route path={PATH.AUTH} element={<Auth />} /> */}
      {/* <Route path={PATH.SIGNUP} element={<SignUp />} />
      <Route path={PATH.ADDPLACE} element={<AddPlace />} />
      <Route path={PATH.REVIEW} element={<Review />} />
      <Route path={PATH.SEARCH} element={<Search />} />
      <Route path={PATH.PLACELISTS} element={<Place />} />
      <Route path={PATH.PLACEDETAIL} element={<PlaceDetail />} />
      <Route path={PATH.MY} element={<MyPage />} />
      <Route path={PATH.MYEDIT} element={<EditMyPage />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default MyRouter;
