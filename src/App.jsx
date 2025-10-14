import React from "react";
import "./App.css";
import image from "./images/aaban.png";

function App() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A fully functional shopping platform built with React and Supabase.",
      img: "https://via.placeholder.com/300x200?text=E-Commerce",
    },
    {
      title: "Chat Application",
      desc: "A real-time chat system powered by WebSocket.",
      img: "https://via.placeholder.com/300x200?text=Chat+App",
    },
    {
      title: "Portfolio Website",
      desc: "A modern and stylish personal portfolio website.",
      img: "https://via.placeholder.com/300x200?text=Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col items-center font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6 md:px-20 w-full max-w-6xl">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-500">Aaban Sahan</span> 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a frontend developer who builds fast, modern and user-friendly websites. 🚀
          </p>
          <a href="mailto:aabansahan@gmail.com" className="mt-4 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all">
            Contact Me
          </a>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={image}
            alt="Aaban Sahan"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="w-full max-w-6xl mt-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          My Projects
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
          {projects.map((p, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src={p.img}
                alt={p.title}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-gray-500 text-sm">
        © 2025 Aaban Sahan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
