import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Vite + React + Tailwind
          </h1>
          <p className="text-lg text-gray-600">
            Projeto configurado com as melhores tecnologias
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="group">
            <img
              src={viteLogo}
              className="h-24 w-24 transition-transform group-hover:scale-110"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" className="group">
            <img
              src={reactLogo}
              className="h-24 w-24 transition-transform group-hover:scale-110"
              alt="React logo"
            />
          </a>
        </div>

        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 mb-4"
          >
            Contador: {count}
          </button>
          <p className="text-gray-600">
            Edite{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              src/App.jsx
            </code>{" "}
            e salve para testar HMR
          </p>
        </div>

        {/* Footer */}
        <p className="text-gray-500">
          Clique nos logos do Vite e React para saber mais
        </p>
      </div>
    </div>
  );
}

export default App;
