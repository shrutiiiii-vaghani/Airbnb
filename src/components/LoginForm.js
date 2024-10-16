import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in:', formData);
    // Here, you would typically send formData to your backend for login
  };

  return (
    <div
    className="min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: 'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-10 bg-white bg-opacity-80 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Login
      </button>
    </form>
    </div>
  );
};

export default LoginForm;
