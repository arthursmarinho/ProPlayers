"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-black animate-drop">
              Welcome to <span className="text-blue-600">ProCounter.net</span>
            </h1>
            <p className="text-black mt-4 text-2xl font-bold animate-drop">
              Everything you need to know about the best — all in one place.
            </p>
            <div className="flex justify-center mt-6 space-x-6 animate-drop">
              <Link
                href="/teams"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 text-xl font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Teams
              </Link>
              <Link
                href="/players"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 text-xl font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Players
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drop {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-drop {
          animation: drop 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}
