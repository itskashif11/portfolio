
import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

function Intro() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-6xl font-bold">
          Muhammad Kashif
        </motion.h1>
        <p className="mt-4 text-gray-400 text-xl">
          Full Stack Engineer | Real-Time Systems Specialist
        </p>

        <div className="mt-10 bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10">
          <p className="text-gray-300">
            Results-driven Software Engineer with 3+ years experience building scalable,
            real-time applications using React, Node.js and modern technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-6 font-bold">Experience</h2>
      <div className="bg-white/5 p-6 rounded-xl">
        <ul className="space-y-2 text-gray-300">
          <li>✔ Sensor integration & real-time systems</li>
          <li>✔ React Leaflet air traffic monitoring</li>
          <li>✔ WebSockets, TCP, UDP</li>
          <li>✔ 24/7 high availability apps</li>
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-6 font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <Card title="Air Traffic System" />
        <Card title="Map Drawing Tool" />
      </div>
    </div>
  );
}

function Card({title}) {
  return (
    <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-xl">{title}</h3>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-6 font-bold">Contact</h2>
      <form className="space-y-3 max-w-lg">
        <input placeholder="Name" className="w-full p-3 bg-black/40 rounded"/>
        <input placeholder="Email" className="w-full p-3 bg-black/40 rounded"/>
        <textarea placeholder="Message" className="w-full p-3 bg-black/40 rounded"/>
        <button className="bg-blue-600 px-5 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
