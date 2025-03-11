import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <ClerkProvider>
      <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-lg">
        <div>
          <a href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3405/3405846.png"
              className="h-10 hover:opacity-80 transition"
              alt="Logo"
            />
          </a>
        </div>

        <div className="flex items-center gap-8 text-white text-lg font-semibold">
          <a href="/teams" className="hover:text-gray-300 transition">
            Teams
          </a>
          <a href="/players" className="hover:text-gray-300 transition">
            Players
          </a>
          <a href="/about" className="hover:text-gray-300 transition">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                Entrar
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Registrar
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </ClerkProvider>
  );
}
