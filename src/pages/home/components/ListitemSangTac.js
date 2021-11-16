import Container from "../../../components/Container"
import SectionDivider from "../../../components/SectionDivider"
import Card2 from "../../../components/Card2"
const ListitemSangTac = () => {
    return (
        <div>
            <SectionDivider>
                <Container>
                    <div className="flex items-center gap-3 mb-5">
                        <div className="bg-black text-white font-bold p-2">Sáng tác</div>
                        <div className="font-bold">MỚI NHẤT</div>
                    </div>
                    <div className="flex gap-10 flex-wrap">
                        <div className="w-[12%]">
                            <Card2/>
                        </div>
                        <div className="w-[12%]">
                            <Card2/>
                        </div>
                        <div className="w-[12%]">
                            <Card2/>
                        </div>
                        <div className="w-[12%]">
                            <Card2/>
                        </div>
                        <div className="w-[12%]">
                            <Card2/>
                        </div>
                        <div className="w-[12%]">
                            <Card2/>
                        </div>
                    </div>
                </Container>
            </SectionDivider>
        </div>
    )
}

export default ListitemSangTac
