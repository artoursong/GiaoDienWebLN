import { useAuth } from 'context/authContext';
const Thongtinuser = () => {
  const [authState] = useAuth();

  return (
    <div className='w-full py-4 border border-gray-200'>
      {!authState.user ? (
        'Error'
      ) : (
        <>
          <div className='px-4'>
            <div className='flex gap-2 mb-5'>
              <div className='px-2 py-1'>UserName: </div>
              <div className='outline-none block px-2 py-1 rounded-md'>
                {authState.user.username}
              </div>
            </div>
            <div className='flex gap-2 mb-5'>
              <div className='px-2 py-1'>Email: </div>
              <div className='outline-none block px-2 py-1 rounded-md'>
                {authState.user.email}
              </div>
            </div>
          </div>
          <div>
            <button className='px-4 py-1 ml-auto bg-blue-500 text-white'>
              Thay đổi
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Thongtinuser;
