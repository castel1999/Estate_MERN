import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 mx-auto max-w-lg  md:max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          id="userName"
          type="text"
          placeholder="username"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 text-lg rounded-lg uppercase hover:opacity-95 disabled:opacity-95"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
