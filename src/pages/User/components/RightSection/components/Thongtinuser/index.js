import { useAuth } from 'context/authContext';
import {  useState } from 'react';
import { changeuserinfo } from 'context/authContext';
const Thongtinuser = () => {
  const [authState, setAuthState] = useAuth();
  const [user, setUser] = useState({
    username : authState.user.username,
    email : authState.user.email
  });
  
  const [isLoading, setIsLoading] = useState(false)

  const handleclick = () => {
    setIsLoading(true)
    changeuserinfo(setAuthState,{
        user: user,
        id: authState.user.iD_User
    }).then(res => setUser({
      username: res.data.username,
      email: res.data.email
    })).finally(() => setIsLoading(false))
  }

  const handlechange = event => {
    setUser((prev) => ({...prev,[event.target.name]:event.target.value}))
  }

  return (
    <div className='w-full py-4 border border-gray-200'>
      {!authState.user ? (
        'Error'
      ) : (
        <>
          <div className='px-4'>
            <div className='flex gap-2 mb-5'>
              <div className='px-2 py-1'>UserName: </div>
              <input onChange={handlechange} name='username' className='outline-none block px-2 py-1 rounded-md border-gray-200 border' value={user.username}/>
            </div>
            <div className='flex gap-2 mb-5'>
              <div className='px-2 py-1'>Email: </div>
              <input onChange={handlechange} name='email' className='outline-none block px-2 py-1 rounded-md border-gray-200 border' value={user.email}/>
            </div>
          </div>
          <div>
            <button onClick={handleclick} disabled={isLoading} className='px-4 py-1 ml-auto bg-blue-500 text-white'>
              Thay đổi
            </button>
            <div>
              {
                isLoading? "Loading ..." : null
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Thongtinuser;
