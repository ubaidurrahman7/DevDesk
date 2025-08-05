import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/styles.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [focused, setFocused] = useState(""); // Track focused input
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => setFocused(e.target.name);
  const handleBlur = () => setFocused("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/login", form);
      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "An error occurred during login. Please try again."
      );
    }
  };

  // Placeholder handlers for OAuth
  const handleGithubLogin = () => {
    alert("GitHub login coming soon!");
  };
  const handleGoogleLogin = () => {
    alert("Google login coming soon!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md border-2 border-green-500 rounded-lg shadow-lg bg-black p-0">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between bg-green-900 px-4 py-2 rounded-t-lg border-b-2 border-green-500">
          <span className="text-green-300 font-mono font-bold tracking-wide">
            DevDesk Login
          </span>
          <span className="text-green-400 text-lg font-bold select-none">
            ■
          </span>
        </div>
        <form onSubmit={handleSubmit} className="p-6 font-mono text-green-400">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-green-300">
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 caret-green-400 terminal-input"
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                autoComplete="off"
              />
              {focused === "email" && form.email === "" && (
                <span className="terminal-caret absolute left-3 top-1/2 -translate-y-1/2 text-green-400">
                  |
                </span>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-green-300">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 caret-green-400 terminal-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                autoComplete="off"
              />
              {focused === "password" && form.password === "" && (
                <span className="terminal-caret absolute left-3 top-1/2 -translate-y-1/2 text-green-400">
                  |
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-black font-bold py-2 rounded shadow transition cursor-pointer border border-green-500"
          >
            Login
          </button>
          {/* Unique OAuth section */}
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-16 bg-green-700"></span>
              <span className="text-green-500 text-xs uppercase tracking-widest">
                or login with
              </span>
              <span className="h-px w-16 bg-green-700"></span>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={handleGithubLogin}
                className="flex items-center gap-2 px-4 py-2 bg-black border cursor-pointer border-green-700 rounded hover:bg-green-900 transition text-green-300 font-mono font-semibold shadow"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.012-1.243-.017-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.899-.015 3.293 0 .322.218.699.825.581C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 px-4 py-2 bg-black border border-green-700 rounded hover:bg-green-900 transition text-green-300 font-mono font-semibold shadow"
              >
                <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 48 48">
                  <g>
                    <path
                      d="M44.5 20H24v8.5h11.7C34.7 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5 12.7 2.5 3.5 11.7 3.5 23S12.7 43.5 24 43.5c10.7 0 20-8.2 20-20 0-1.3-.1-2.7-.3-3.5z"
                      fill="#fbbc05"
                    />
                    <path
                      d="M6.3 14.7l7 5.1C15.5 16.2 19.4 13 24 13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5c-7.2 0-13 5.8-13 13 0 2.1.5 4.1 1.3 5.7z"
                      fill="#ea4335"
                    />
                    <path
                      d="M24 44.5c5.8 0 10.7-1.9 14.7-5.2l-6.8-5.6C29.9 35.1 27.1 36 24 36c-5.7 0-10.6-3.1-13.2-7.7l-7 5.4C7.1 40.2 14.9 44.5 24 44.5z"
                      fill="#34a853"
                    />
                    <path
                      d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2l-7 5.4C15.5 41.8 19.4 44.5 24 44.5c10.7 0 20-8.2 20-20 0-1.3-.1-2.7-.3-3.5z"
                      fill="#4285f4"
                    />
                  </g>
                </svg>
                Google
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-green-500 text-sm">
            Don't have an account?
            <Link
              to="/register"
              className="text-green-300 hover:underline ml-2"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
