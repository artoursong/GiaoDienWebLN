import Container from '../../../components/Container';
const Khungdangnhap = () => {
  return (
    <div>
      <Container>
        <div className='max-w-[700px] mx-auto mt-28 border border-gray-200 rounded-md'>
          <div className='px-4 py-2 bg-gray-100 border-b border-gray-200'>
            Đăng nhập
          </div>
          <div className='p-4'>
            <div className='max-w-[550px] mx-auto'>
              <div className='w-full flex gap-8 mb-5 items-center'>
                <label className='w-[40%] inline-block text-right'>
                  Tên đăng nhập hoặc Email
                </label>
                <div className='w-[55%]'>
                  <input
                    type='text'
                    className='outline-none block border px-2 py-1 border-gray-200 rounded-md w-full'
                  />
                </div>
              </div>
              <div className='w-full flex gap-8 mb-5 items-center'>
                <label className='w-[40%] inline-block text-right'>
                  Mật khẩu
                </label>
                <div className='w-[55%]'>
                  <input
                    type='text'
                    className='outline-none block border border-gray-200 rounded-md w-full px-2 py-1'
                  />
                </div>
              </div>
              <div className='w-full flex gap-8 mb-5 items-center'>
                <label className='w-[40%] inline-block text-right'>
                  Ghi nhớ
                </label>
                <div className='w-[55%]'>
                  <input type='checkbox' />
                </div>
              </div>
              <div className='w-full flex gap-8 mb-5 items-center'>
                <div class='w-[55%] ml-auto'>
                  <button className='px-4 py-1 bg-blue-500 text-white'>
                    Login
                  </button>
                  <span className='text-blue-400 cursor-pointer hover:underline ml-7'>
                    Quên mật khẩu?
                  </span>
                </div>
              </div>
              <div className='w-full flex gap-8 items-center'>
                <div className='w-[55%] ml-auto'>
                  <span>Bạn đã có tài khoản?</span>{' '}
                  <span className='text-blue-400 cursor-pointer hover:underline'>
                    Đăng kí
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Khungdangnhap;
