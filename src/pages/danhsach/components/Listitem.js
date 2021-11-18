import Card2 from "../../../components/Card2"
import Container from "../../../components/Container"
const Listitem = () => {
    return (
            <div>
                <div className="flex mb-7">
                    <p>Home</p>
                    <div className="cursor-pointer">Danh sách</div>
                </div>
                <div className="mb-6">
                    <select className="">
                        <option>A-Z</option>
                        <option>Z-A</option>
                        <option>Mới cập nhật</option>
                    </select>
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
    )
}

export default Listitem
