import React, { useState } from "react";
import loginAPI from "../api/login";
import signupAPI from "../api/signup";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/logo/mohammad-rahmani-q1p2DrLBtko-unsplash.jpg";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = isLoggingIn
        ? await loginAPI(username, password)
        : await signupAPI(username, email, password);

      if (data.success) {
        console.log(data.message);
        navigate("/");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <div className="flex min-h-screen text-white font-mono">
      {/* Left - Image with message */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/60 to-transparent z-10" />
        <div className="relative z-20 w-full h-full flex items-center justify-center p-12 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-snug text-white drop-shadow-2xl">
              Welcome Back <br /> to <span className="text-orange-400">Your Space</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              Unlock your digital journey and manage your profile like a pro.
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-black px-4 py-12">
        <div className="bg-[#121212] border border-gray-800 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-400 tracking-wide">
            {isLoggingIn ? "Login" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {!isLoggingIn && (
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 rounded-md shadow-lg hover:shadow-orange-400/30"
            >
              {isLoggingIn ? "Enter the Code" : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-sm text-center text-gray-500">
            <span>{isLoggingIn ? "Don't have an account?" : "Already a user?"}</span>{" "}
            <button
              onClick={() => setIsLoggingIn((prev) => !prev)}
              className="text-orange-400 hover:underline ml-1"
            >
              {isLoggingIn ? "Sign up here" : "Login here"}
            </button>
          </div>

          <hr className="my-6 border-gray-700" />

          <p className="text-xs text-gray-600 text-center">
            Crafted for coders. Built with ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
