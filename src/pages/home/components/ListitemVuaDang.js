import Container from "../../../components/Container"
import SectionDivider from "../../../components/SectionDivider"
import CardVuaDang from "../../../components/CardVuaDang"
const ListitemVuaDang = () => {
    return (
        <div>
            <SectionDivider>
                    <div className="flex items-center gap-3 mb-5 mt-20">
                        <div className="bg-black text-white font-bold p-2">Truyện</div>
                        <div className="font-bold">VỪA ĐĂNG</div>
                    </div>
                    <div className="flex gap-10">
                        <CardVuaDang />
                        <CardVuaDang />
                    </div>
            </SectionDivider>
        </div>
    )
}

export default ListitemVuaDang
