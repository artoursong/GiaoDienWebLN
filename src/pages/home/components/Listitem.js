import Card from "../../../components/Card"
import Container from "../../../components/Container"
import SectionDivider from "../../../components/SectionDivider"
const Listitem = () => {
    return (
        <SectionDivider>
        <Container>
            <div className="flex gap-5 items-center mb-5">
                <div className="bg-black text-white font-bold p-2">Nổi bật</div>
                <div className="text-gray-400 font-bold">Top tháng</div>
                <div className="text-gray-400 font-bold">Top toàn thời gian</div>
            </div>
            <div className="flex gap-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
        </SectionDivider>
    )
}

export default Listitem
