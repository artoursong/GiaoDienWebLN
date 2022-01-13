import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import User from '../pages/User';
import Danhsach from '../pages/danhsach';
import MainLayout from '../components/Layout/MainLayout';
import Dangnhap from '../pages/dangnhap';
import Truyen from '../pages/truyen';
import ProtectedRoute from './ProtectedRoute';

const Approuter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='danhsach' element={<Danhsach />} />
          <Route
            path='user'
            element={
              <ProtectedRoute isPrivate={true}>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path='truyen' element={<Truyen />} />
        </Route>
        <Route path='dangnhap' element={<Dangnhap />} />
        {/* <Route path="/user" element={<UserLayout/>}>
                    <Route index element={<User/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Route> */}
      </Routes>
    </Router>
  );
};
export default Approuter;
