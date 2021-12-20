import { Link } from 'react-router-dom';

const ThongTin = () => {
  return (
    <div className='border border-gray-200'>
      <div className='flex gap-10 p-2'>
        <img
          className='w-[180px]'
          src='https://en.datosjam.net.pe/wp-content/uploads/2021/09/Jujutsu-Kaisen-manga-reveals-cover-for-volume-17.jpg'
          alt='ln'
        />
        <div className='w-full'>
          <span className='text-2xl font-bold cursor-pointer capitalize'>
            Jujutsu Kaisen
          </span>
          <div className='flex gap-5 mt-4'>
            <Link
              className='px-3 py-[2px] bg-gray-200 rounded-full'
              to='/truyen'
            >
              Action
            </Link>
            <Link
              className='px-3 py-[2px] bg-gray-200 rounded-full'
              to='/truyen'
            >
              Fantasy
            </Link>
            <Link
              className='px-3 py-[2px] bg-gray-200 rounded-full'
              to='/truyen'
            >
              Romance
            </Link>
          </div>
          <div className='mt-4 mb-2'>
            <span className='font-bold'>Tác giả: </span>
            <Link to='/truyen' className='hover:text-green-500'>
              Tsubaki Himana, Yuu Kamiya
            </Link>
          </div>
          <div className='mb-2'>
            <span className='font-bold'>Họa sĩ: </span>
            <Link to='/truyen' className='hover:text-green-500'>
              Shino
            </Link>
          </div>
          <div className=''>
            <span className='font-bold'>Tình trạng: </span>
            <Link to='/truyen' className='hover:text-green-500'>
              Đang tiến hành
            </Link>
          </div>
          <div className='flex mt-7 justify-evenly'>
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
      <div className='flex w-full justify-evenly mt-5 border-t border-b border-gray-200 py-2'>
        <div className='flex flex-col items-center'>
          <span className='text-gray-400'>Lần cuối</span>
          <span className='text-xl font-bold'>6 giờ</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-gray-400'>Số từ</span>
          <span className='text-xl font-bold'>221.189</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-gray-400'>Đánh giá</span>
          <span className='text-xl font-bold'>4.9/5</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-gray-400'>Lượt xem</span>
          <span className='text-xl font-bold'>53481</span>
        </div>
      </div>
      <div className='px-2 py-4'>
        <h2 className='font-bold text-xl'>Tóm tắt</h2>
        <p>
          Câu chuyện diễn ra trong một thế giới đồng hồ, tên gọi thứ hai của
          Trái Đất, nơi mà hoạt động sống của toàn thể hành tinh được tái tạo
          bởi các bánh răng chuyển động. Nhân vật chính là Naoto Miura cuồng máy
          móc, kỹ sư đồng hồ thiên tài Marie Bell Breguet, cựu quân nhân kiêm vệ
          sĩ Vainney Halter và một Automaton RyuZU. Họ gặp được nhau trong
          nghịch cảnh, vì một lí do, một tháng sau đã quyết định trở thành những
          tội phạm nguy hiểm bậc nhất thế giới.
        </p>
      </div>
    </div>
  );
};

export default ThongTin;
