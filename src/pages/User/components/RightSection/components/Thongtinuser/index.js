import { useAuth } from "context/authContext";
import { useState } from "react";
import { changeuserinfo } from "context/authContext";
const Thongtinuser = () => {
  // const [authState, setAuthState] = useAuth();
  // const [user, setUser] = useState({
  //   username: authState.user.username,
  //   email: authState.user.email,
  // });

  // const [isLoading, setIsLoading] = useState(false);

  // const handleclick = () => {
  //   setIsLoading(true);
  //   changeuserinfo(setAuthState, {
  //     user: user,
  //     id: authState.user.iD_User,
  //   })
  //     .then((res) =>
  //       setUser({
  //         username: res.data.username,
  //         email: res.data.email,
  //       })
  //     )
  //     .finally(() => setIsLoading(false));
  // };

  // const handlechange = (event) => {
  //   setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  // };

  return (
    <div className="w-full border border-gray-200 py-4">
      {0 ? (
        "Error"
      ) : (
        <>
          <div className="px-4">
            <div className="mb-5 flex gap-2">
              <div className="px-2 py-1">UserName: </div>
              <input
                // onChange={handlechange}
                name="username"
                className="block rounded-md border border-gray-200 px-2 py-1 outline-none"
                value={1}
              />
            </div>
            <div className="mb-5 flex gap-2">
              <div className="px-2 py-1">Email: </div>
              <input
                // onChange={handlechange}
                name="email"
                className="block rounded-md border border-gray-200 px-2 py-1 outline-none"
                value={2}
              />
            </div>
          </div>
          <div>
            <button
              // onClick={handleclick}
              // disabled={isLoading}
              className="ml-auto bg-blue-500 px-4 py-1 text-white"
            >
              Thay đổi
            </button>
            {/* <div>{isLoading ? "Loading ..." : null}</div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Thongtinuser;
