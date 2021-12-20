const chapters = [
    {
        title: 'Minh hoa',
        date: '26/09/2019'
    },
    {
        title: 'Mo dau',
        date: '26/09/2019'
    },{
        title: 'Chuong mot',
        date: '26/09/2019'
    },
    {
        title: 'Chuong hai',
        date: '26/09/2019'
    },
    {
        title: 'Chuong ba',
        date: '26/09/2019'
    }
]

const Chapter = () => {
    return (
        <div className="mt-6 border">
            <div className="font-bold py-2 pl-4 bg-gray-100">Tập 1</div>
            <div className="mt-3 flex gap-5 p-2">
                <img className="w-[116px] h-[166px]" src="https://images-ext-2.discordapp.net/external/9Aa3Uxiimb-vbsbcBWErgrVUiUbNDHv2GmTuJHCLUAA/https/ih1.redbubble.net/image.2127422798.1232/flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.jpg?width=507&height=676" alt="ln" />
                <div className="w-full">
                    <ul className="w-full">
                        
                        {chapters.map(chapter => <li className="cursor-pointer flex items-center justify-between py-1 even:bg-gray-50 px-4">
                            <span>{chapter.title}</span>
                            <span className="text-gray-400">{chapter.date}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Chapter