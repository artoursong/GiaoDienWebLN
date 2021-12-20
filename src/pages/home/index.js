//import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import Thongbao from "./components/Thongbao"
import Listitem from "./components/Listitem"
import ListitemSangTac from "./components/ListitemSangTac"
import ListitemMoiNhat from "./components/ListitemMoiNhat"
import ListitemVuaDang from "./components/ListitemVuaDang"
import TheoDoiNhieu from "./components/TheoDoiNhieu"
import Container from "../../components/Container"
const home = () => {
    return (
        <div>
            <Banner/>
            <Thongbao/>
            <Listitem />
            <ListitemMoiNhat />
            <ListitemSangTac />
            <Container>
                <div className="flex">
                    <ListitemVuaDang />
                    <TheoDoiNhieu />
                </div>
            </Container>  
        </div>
    )
}

export default home

