import Banner from "./components/Banner"
import Listitem from "./components/Listitem"
import SearchChuCai from "./components/SearchChuCai"
import Container from "../../components/Container"
import PhanLoai from "./components/PhanLoai"
import TinhTrang from "./components/TinhTrang"
import TheLoai from "./components/TheLoai"
const danhsach = () => {
    return (
        <div>
            <Banner/>
            <Container>
                <div className="flex">
                    <Listitem/>
                    <div>
                        <SearchChuCai/>
                        <PhanLoai />
                        <TinhTrang />
                        <TheLoai />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default danhsach
