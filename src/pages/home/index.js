//import { Link } from "react-router-dom"
import Banner from "./components/Banner"
import Thongbao from "./components/Thongbao"
import Listitem from "./components/Listitem"
import Listitem_2 from "./components/Listitem_2"
const home = () => {
    return (
        <div>
            <Banner/>
            <Thongbao/>
            <Listitem />
            <Listitem_2 />
        </div>
    )
}

export default home

