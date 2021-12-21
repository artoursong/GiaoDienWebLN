import { Link } from 'react-router-dom';
const Thongtindichgia = () => {
    return (
        <div className='border border-gray-500 w-full'>
            <div className='py-6 bg-green-500'>
            </div>
            <div className='py-2 px-2'>
                <div className='mb-1 text-gray-400'>Dịch giả</div>
                <Link className='text-2xl font-bold hover:text-green-400' to='/truyen'>Dịch giả</Link>
            </div>
        </div>
    )
}

export default Thongtindichgia;