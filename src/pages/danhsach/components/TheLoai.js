const theloai = [
    {
        id: 1,
        title: "action"
    },
    {
        id: 2,
        title: "action"
    },
    {
        id: 3,
        title: "action"
    },
    {
        id: 4,
        title: "action"
    },
    {
        id: 5,
        title: "action"
    },
    {
        id: 6,
        title: "action"
    },
    {
        id: 7,
        title: "action"
    },
    {
        id: 8,
        title: "action"
    },
    {
        id: 9,
        title: "action"
    },
    {
        id: 10,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    {
        id: 11,
        title: "action"
    },
    
]
const TheLoai = () => {
    return (
        <div>
            <div className="shadow-md p-5">
                <div className="mb-3 font-bold shadow-md w-[90px] text-center h-[30px] bg-gray-200">Thể loại</div>
                <div className="h-[400px] overflow-auto">
                    {
                        theloai.map((item,index) => <div key={index} className="cursor-pointer">{item.title}</div>)
                    }
                </div>   
            </div>
        </div>
    )
}

export default TheLoai
