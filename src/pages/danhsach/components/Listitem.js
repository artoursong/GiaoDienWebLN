import Card2 from "../../../components/Card2"
import Container from "../../../components/Container"
const Listitem = () => {
    return (
        <Container>
            <div>
                <div className="flex mb-7">
                    <p>Home--</p>
                    <div className="cursor-pointer">Danh sách</div>
                </div>
                <div className="mb-6">
                    <select className=""></select>
                </div>
                <div className="flex gap-5 flex-wrap">
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                    <div className="w-[15%]">
                        <Card2/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Listitem
