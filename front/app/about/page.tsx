"use client";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre a Plataforma
          </h2>
          <span className="text-lg text-gray-700">
            A platform that provides detailed insights into professional
            Counter-Strike players, allowing users to log in and save their
            favorite players' information for future access.
          </span>
        </div>
      </div>
    </div>
  );
}
