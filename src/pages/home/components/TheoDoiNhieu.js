import CardTheoDoiNhieu from "../../../components/CardTheoDoiNhieu"
import Container from "../../../components/Container"
const TheoDoiNhieu = () => {
    return (      
        <div>
            <Container>
                <div className="flex items-center gap-3 mb-5 mt-20">
                    <div className="bg-black text-white font-bold p-2">Theo dõi</div>
                    <div className="font-bold">NHIỀU</div>
                </div>
                <div>
                    <div className="mb-5 flex gap-5">
                        <div className="">1</div>
                        <CardTheoDoiNhieu />
                    </div>
                    <div className="mb-5 flex gap-5">
                        <div className="">2</div>
                        <CardTheoDoiNhieu />
                    </div>
                    <div className="mb-5 flex gap-5">
                        <div className="">3</div>
                        <CardTheoDoiNhieu />
                    </div>
                    <div className="mb-5 flex gap-5">
                        <div className="">4</div>
                        <CardTheoDoiNhieu />
                    </div>
                    <div className="mb-5 flex gap-5">
                        <div className="">5</div>
                        <CardTheoDoiNhieu />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TheoDoiNhieu
