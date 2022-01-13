import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from 'context/authContext';

const menu = [
  {
    id: 1,
    title: 'Sáng tác',
  },

  {
    id: 2,
    title: 'Convert',
  },

  {
    id: 3,
    title: 'Xuất bản',
  },

  {
    id: 4,
    title: 'Thảo luận',
  },

  {
    id: 5,
    title: 'Danh sách',
  },

  {
    id: 6,
    title: 'Hướng dẫn',
  },
];

const Header = () => {
  const [authState] = useAuth();

  const navigate = useNavigate();

  return (
    <div className='bg-white'>
      <Container>
        <div className='flex items-center'>
          <div className='mr-16'>
            <h1 className='text-green-700 text-[40px] font-semibold cursor-pointer'>
              WebTruyen
            </h1>
          </div>
          <div>
            <nav>
              <ul className='flex gap-5'>
                {menu.map(item => (
                  <li key={item.id} className='font-semibold cursor-pointer'>
                    {item.title}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='ml-16'>
            <input
              type='text'
              className='outline-none bg-[#e0e0e0] rounded-xl px-3 py-1'
              placeholder='Tìm kiếm'
            />
          </div>
          <div>
            {!authState.user ? (
              <div
                className='ml-5 font-bold cursor-pointer'
                onClick={() => navigate('/dangnhap')}
              >
                Đăng nhập
              </div>
            ) : (
              <div
                className='ml-5 font-bold cursor-pointer'
                onClick={() => navigate('/user')}
              >
                {authState.user.username}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
