import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from '../pages/home';
import User from '../pages/User';
import MainLayout from '../components/Layout/MainLayout';
const Approuter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="user" element={<User/>}/>
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
