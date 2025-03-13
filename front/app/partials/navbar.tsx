import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <ClerkProvider>
      <nav className="flex items-center justify-evenly px-6 py-4 bg-black shadow-lg">
        <div>
          <Link href="/">
            <Image
              src={"https://cdn-icons-png.flaticon.com/512/3405/3405846.png"}
              alt="Logo"
              width={75}
              height={50}
            />
          </Link>
        </div>

        <div className="flex items-center gap-8 text-white text-lg font-semibold">
          <Link href="/teams" className="hover:text-gray-300 transition">
            Teams
          </Link>
          <Link href="/players" className="hover:text-gray-300 transition">
            Players
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                Entrar
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-white text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
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
