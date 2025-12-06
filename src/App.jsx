import React from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100">
      <Navbar />
      <Portfolio />
    </div>
  );
}
