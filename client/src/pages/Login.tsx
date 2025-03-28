import React, { useState } from "react";
import loginAPI from "../api/login";
import { useNavigate } from "react-router-dom";
import signupAPI from "../api/signup";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Default to login mode
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoggingIn) {
      //handling login
      try {
        const data = await loginAPI(username, password);
        if (data.success) {
          console.log(data.message);
          navigate("/");
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log("Error in login", error);
      }
    } else {
      //handling signup
      try {
        const data = await signupAPI(username, email, password);
        if (data.success) {
          console.log(data.message);
          navigate("/");
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log("an unexpected error ocuured: ", error);
      }
    }
  };

  return (
    <div className="flex  justify-center mb-200 min-h-100 mt-15 bg-black px-4 overflow-y-hidden">
      <div className="bg-black border-1 border-gray-800 p-8 rounded-xl shadow-lg w-full max-w-200">
        <h2 className="text-4xl font-bold text-white font-sans text-center mb-6">
          {isLoggingIn ? "Login" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field (Common for Login & Signup) */}
          <div className="gap-x-10">
            <label className="text-gray-300 mb-1 mr-8">Email</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-[#101010] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Username Field (Only for Signup) */}
          {!isLoggingIn && (
            <div>
              <label className="block text-gray-300 mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#101010] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          {/* Password Field */}
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#101010] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-2 rounded-md shadow-md"
          >
            {isLoggingIn ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Between Login & Signup */}
        <p className="text-center text-gray-400 mt-4">
          {isLoggingIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLoggingIn((prev) => !prev)}
            className="text-orange-400 hover:underline cursor-pointer"
          >
            {isLoggingIn ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
