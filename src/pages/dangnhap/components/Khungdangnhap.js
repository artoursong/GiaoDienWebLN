import Container from "../../../components/Container";
import { authService } from "api/auth";
import { useState } from "react";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router-dom";

const Khungdangnhap = () => {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [, setAuthState] = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    setError("");
    const user = {
      username: username,
      password: password,
    };
    authService
      .login(user)
      .then((res) => {
        if (res.status === 200) {
          setAuthState({
            isAuth: true,
            user: res.data.loginData,
          });

          localStorage.setItem("token", res.data.token);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => setError("Sai tai khoan hoac mat khau!"));

    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-28 max-w-[700px] rounded-md border border-gray-200"
        >
          <div className="border-b border-gray-200 bg-gray-100 px-4 py-2">
            Đăng nhập
          </div>
          <div className="p-4">
            <div className="mx-auto max-w-[550px]">
              {error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : null}
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right">
                  Tên đăng nhập hoặc Email
                </label>
                <div className="w-[55%]">
                  <input
                    type="text"
                    className="block w-full rounded-md border border-gray-200 px-2 py-1 outline-none"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                    value={username}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right">
                  Mật khẩu
                </label>
                <div className="w-[55%]">
                  <input
                    type="password"
                    className="block w-full rounded-md border border-gray-200 px-2 py-1 outline-none"
                    onChange={(event) => {
                      setPass(event.target.value);
                    }}
                    value={password}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right">
                  Ghi nhớ
                </label>
                <div className="w-[55%]">
                  <input type="checkbox" />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <div className="ml-auto w-[55%]">
                  <button
                    type="submit"
                    className="bg-blue-500 px-4 py-1 text-white"
                  >
                    Login
                  </button>
                  <span className="ml-7 cursor-pointer text-blue-400 hover:underline">
                    Quên mật khẩu?
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-8">
                <div className="ml-auto w-[55%]">
                  <span>Bạn đã có tài khoản?</span>{" "}
                  <span className="cursor-pointer text-blue-400 hover:underline">
                    Đăng kí
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Khungdangnhap;
