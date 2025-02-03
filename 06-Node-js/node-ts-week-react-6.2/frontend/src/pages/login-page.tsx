import { useRef, useState } from "react";
import { UsernameIcon, PasswordIcon, Eye, EyeSlash } from "../assets";
import { useNavigate } from "react-router-dom";
import Error from "../components/error";
import { useRecoilState } from "recoil";
import { isPasswordAtom, isUsernameAtom } from "../store/atoms/atoms";
import axios from "axios";

const LoginPage: React.FC = () => {
  // password show and hide
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // navigate
  const navigate = useNavigate();

  // check username and password
  const [isUsernameEmpty, setIsUsernameEmpty] =
    useRecoilState<boolean>(isUsernameAtom);

  const [isPasswordEmpty, setIsPasswordEmpty] =
    useRecoilState<boolean>(isPasswordAtom);

  // store username and password from input
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // on click of login button
  async function handleLogin() {
    const user = username.current?.value;
    const pass = password.current?.value;

    setIsUsernameEmpty(!user);
    setIsPasswordEmpty(!pass);

    if (!user || !pass) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: user,
        password: pass,
      });

      if (response.data.success) {
        navigate("/home");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Backend responded with an error
          const { status, data } = error.response;
          if (status === 404) {
            alert("User not found. Please sign up first.");
          } else if (status === 401) {
            alert("Incorrect password. Please try again.");
          } else {
            alert(data.message || "Something went wrong. Please try again.");
          }
        } else {
          // No response (Network Error)
          alert("Network error! Please check your connection.");
        }
      } else {
        // Unknown error
        console.error(error);
        alert("An unexpected error occurred.");
      }
    }
  }

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-gray-100">
      {/* Login Box */}
      <div
        className="flex flex-col items-center shadow-2xl bg-white  
                      sm:h-[500px] sm:w-96 sm:p-4 p-1 rounded-2xl"
      >
        {/* Top Section */}
        <div className="w-full py-8 bg-blue-600 rounded-2xl text-center mx-2">
          <h1 className="text-4xl font-extrabold text-white">Welcome</h1>
          <p className="text-white text-lg">to the website</p>
        </div>

        {/* Username Input */}
        <div className="mt-8 flex items-center bg-blue-600 text-white gap-3 px-6 py-3 rounded-md w-full">
          <UsernameIcon className="w-5 h-5" />
          <input
            type="text"
            id="username"
            ref={username}
            maxLength={12}
            placeholder="Username"
            autoComplete="username"
            className="outline-none text-white font-bold bg-transparent flex-1"
          />
        </div>
        {!isUsernameEmpty && <Error error="enter username" />}

        {/* Password Input */}
        <div className="mt-4 flex items-center bg-blue-600 text-white gap-3 px-6 py-3 rounded-md w-full">
          <PasswordIcon className="w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            ref={password}
            maxLength={12}
            placeholder="Password"
            autoComplete="current-password"
            className="outline-none text-white font-bold bg-transparent flex-1"
          />
          <button
            className="outline-none"
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? (
              <Eye className="w-8 h-6" />
            ) : (
              <EyeSlash className="w-8 h-6" />
            )}
          </button>
        </div>
        {!isPasswordEmpty && <Error error="enter password" />}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 bg-blue-600 px-6 py-3 rounded-md text-white text-lg font-bold w-full 
          hover:bg-blue-400 transition-all duration-300 cursor-pointer"
        >
          Login
        </button>

        <p className="p-8">
          create account{" "}
          <button
            className="text-blue-600 cursor-pointer hover:text-xl transition-all duration-300"
            onClick={() => navigate("/signup")}
          >
            sign-up
          </button>{" "}
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
