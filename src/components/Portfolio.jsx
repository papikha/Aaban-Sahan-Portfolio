import React, { useState } from "react";
import aaban from "../images/aaban.png";
import chat from "../images/chat.png";
import calculator from "../images/calculator.png";
import p404 from "../images/404.png";
import nfc from "../images/nfc.png";
import register from "../images/register.png";
import login from "../images/login.png";

function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      title: "404 Page",
      desc: "A modern, responsive and animated 404 Page.",
      img: p404,
    },
    {
      title: "Prototype E-Commerce Website",
      desc: "A functional shopping platform with responsive design built with JavaScript. (My first project)",
      img: calculator,
    },
    {
      title: "Calculator",
      desc: "A functional calculator.(first project)",
      img: calculator,
    },
    {
      title: "Chat Application",
      desc: "A real-time chat system powered by WebSocket. Built with React and WebSocket (frontend only).",
      img: chat,
    },
    {
      title: "NFC App",
      desc: "An Nfc reader and writer web site with JavaScript. (I just focused on functionality, not UI)",
      img: nfc,
    },
    {
      title: "Register Page",
      desc: "A simple and elegant Register form design using React.",
      img: register,
    },
    {
      title: "login Page",
      desc: "A simple and elegant Login form design using React.",
      img: login,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col items-center font-sans relative">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6 md:px-20 w-full max-w-6xl">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-500">Aaban Sahan</span> 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a frontend developer who builds fast, modern and user-friendly websites. 🚀
          </p>
          <a
            href="mailto:aabansahan@gmail.com"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            Contact Me
          </a>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={aaban}
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
              className="min-w-[280px] bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImg(p.img)}
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

      {/* Fullscreen Image Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
          />
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-500"
          >
            ×
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto py-6 text-gray-500 text-sm">
        © 2025 Aaban Sahan. All rights reserved.
      </footer>
    </div>
  );
}

export default Portfolio;
