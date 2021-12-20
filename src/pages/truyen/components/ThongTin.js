import { Link } from "react-router-dom"
import Chapter from "./Chapter"

const ThongTin = () => {
    return (
        <div >
            <div className="w-[868px]">
                <div className="border border-gray-200">
                    <div className="flex gap-10 p-2">
                        <img className="w-[189.5px] h-[271.61px]" src="https://images-ext-2.discordapp.net/external/9Aa3Uxiimb-vbsbcBWErgrVUiUbNDHv2GmTuJHCLUAA/https/ih1.redbubble.net/image.2127422798.1232/flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg?width=507&height=676" alt="ln" />
                        <div className="w-full">
                            <span className="text-2xl font-bold cursor-pointer">Jujutsu Kaisen</span>
                            <div className="flex gap-5 mt-4">
                                <Link className="px-3 py-[2px] bg-gray-200 rounded-full" to="/truyen">Action</Link>
                                <Link className="px-3 py-[2px] bg-gray-200 rounded-full" to="/truyen">Fantasy</Link>
                                <Link className="px-3 py-[2px] bg-gray-200 rounded-full" to="/truyen">Romance</Link>
                            </div>
                            <div className="mt-4 mb-2">
                                <span className="font-bold">Tác giả: </span>
                                <Link to="/truyen"></Link>
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Họa sĩ: </span>
                                <Link to="/truyen"></Link>
                            </div>
                            <div className="">
                                <span className="font-bold">Tình trạng: </span>
                                <Link to="/truyen"></Link>
                            </div>
                            <div className="flex mt-7 justify-evenly">
                                <div>
                                    <span>472</span>
                                </div>
                                <div>
                                    <span>Đánh giá</span>
                                </div>
                                <div>
                                    <span>Mục lục</span>
                                </div>
                                <div>
                                    <span>Bàn luận</span>
                                </div>
                                <div>
                                    <span>Chia sẻ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-evenly mt-5 border-t border-b border-gray-200 py-2">
                        <div className="flex flex-col items-center">
                            <span>Lần cuối</span>
                            <span>6 giờ</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>Số từ</span>
                            <span>221.189</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>Đánh giá</span>
                            <span>4.9/5</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>Lượt xem</span>
                            <span>53481</span>
                        </div>
                    </div>
                    <div className="mt-4 p-2">
                            <h2 className="font-bold text-xl">Tóm tắt</h2>
                            <p>Câu chuyện diễn ra trong một thế giới đồng hồ, tên gọi thứ hai của Trái Đất, nơi mà hoạt động sống của toàn thể hành tinh được tái tạo bởi các bánh răng chuyển động. Nhân vật chính là Naoto Miura cuồng máy móc, kỹ sư đồng hồ thiên tài Marie Bell Breguet, cựu quân nhân kiêm vệ sĩ Vainney Halter và một Automaton RyuZU. Họ gặp được nhau trong nghịch cảnh, vì một lí do, một tháng sau đã quyết định trở thành những tội phạm nguy hiểm bậc nhất thế giới.</p>
                    </div>
                </div>
                <Chapter />
            </div>
        
        </div>
    )
}

export default ThongTin