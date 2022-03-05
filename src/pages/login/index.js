import Container from "components/Container";
import { authService } from "api/auth";
import { useState } from "react";
import { useAuth } from "context/authContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
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
    <div className="min-h-screen bg-[#0D213D] pt-32">
      <Container>
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-[700px] overflow-hidden rounded-md border border-gray-700"
        >
          <h2 className="bg-gray-700 px-4 py-2 text-lg text-light-gray">
            Đăng nhập
          </h2>
          <div className="p-4">
            <div className="mx-auto max-w-[550px]">
              {error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : null}
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right text-light-gray">
                  Tên đăng nhập hoặc Email
                </label>
                <div className="w-[55%]">
                  <input
                    type="text"
                    className="mt-1 mb-2 block w-full rounded-md bg-[#314053] px-4 py-2 text-white"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                    value={username}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right text-light-gray">
                  Mật khẩu
                </label>
                <div className="w-[55%]">
                  <input
                    type="password"
                    className="mt-1 mb-2 block w-full rounded-md bg-[#314053] px-4 py-2 text-white"
                    onChange={(event) => {
                      setPass(event.target.value);
                    }}
                    value={password}
                  />
                </div>
              </div>
              <div className="mb-5 flex w-full items-center gap-8">
                <label className="inline-block w-[40%] text-right text-light-gray">
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
                    className="rounded-md bg-indigo-600 px-6 py-1 text-white"
                  >
                    Login
                  </button>
                  <span className="ml-7 cursor-pointer text-indigo-500 hover:underline">
                    Quên mật khẩu?
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-8">
                <div className="ml-auto w-[55%] text-light-gray">
                  <span>Bạn chưa có tài khoản?</span>{" "}
                  <Link
                    to="/dang-ky"
                    className="cursor-pointer text-indigo-500 hover:underline"
                  >
                    Đăng kí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
