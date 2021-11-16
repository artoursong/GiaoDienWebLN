import { Outlet } from "react-router-dom"
import Header from "../Header/Index"
import Footer from "../Footer/Index"

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
