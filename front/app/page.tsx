import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-white min-h-screen"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-black">
              Welcome to <span className="text-blue-600">ProCounter.net</span>
            </h1>
            <p className="text-black mt-4 text-2xl font-bold">
              Find everything about the best ones.
            </p>
            <div className="flex justify-center mt-6 space-x-6">
              <a
                href="/teams"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 text-xl font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Teams
              </a>
              <a
                href="/players"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 text-xl font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Players
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
