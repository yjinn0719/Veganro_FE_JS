import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/router';
import Home from '@/pages/Home';
import AddPlace from '@/pages/AddPlace';

const MyRouter = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      <Route path={PATH.ADDPLACE} element={<AddPlace />} />
    </Routes>
  );
};

export default MyRouter;
