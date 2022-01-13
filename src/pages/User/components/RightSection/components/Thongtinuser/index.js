import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import callApi from 'apicaller';
const Thongtinuser = () => {
    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    
    useEffect(() => {
        const token = {
            tokenstring : localStorage.getItem("token")
        }
        setIsLoading(true)
        callApi(`user/decodetoken`, "POST", token).then(res => {
            setId(res.data.iD_User)
            setUsername(res.data.username)
            setEmail(res.data.email)
           
        }).finally(() =>  setIsLoading(false))
    }, [])
   
    return (
        <div className="w-full py-4 border border-gray-200">
            {isLoading ? '...Loading' : (
                <>
                <div className="px-4">
                <div className="flex gap-2 mb-5">
                    <div className='px-2 py-1'>UserName: </div>
                    <div className='outline-none block px-2 py-1 rounded-md'>{username}</div>
                </div>
                <div className="flex gap-2 mb-5">
                    <div className='px-2 py-1'>Email: </div>
                    <div className='outline-none block px-2 py-1 rounded-md'>{email}</div>
                </div>
                    </div>
                    <div>
                <button className='px-4 py-1 ml-auto bg-blue-500 text-white'>Thay đổi</button>
            </div>
                    </>
            )
            
            }
            
            
        </div>
    )
}

export default Thongtinuser
