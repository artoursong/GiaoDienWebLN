import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from '../pages/home';
import User from '../pages/User';
import Danhsach from '../pages/danhsach';
import MainLayout from '../components/Layout/MainLayout';
import Dangnhap from '../pages/dangnhap';
import Truyen from '../pages/truyen';
const Approuter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="danhsach" index element={<Danhsach/>}/>
                    <Route path="user" element={<User/>}/>
                    <Route path="dangnhap" index element={<Dangnhap/>}/>
                    <Route path="truyen" index element={<Truyen/>}/>
                </Route>
                {/* <Route path="/user" element={<UserLayout/>}>
                    <Route index element={<User/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Route> */}
            </Routes>
        </Router>
    )
};
export default Approuter
