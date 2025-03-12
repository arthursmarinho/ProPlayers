import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-2 bg-gray-800 text-white p-4 text-center">
      <p>ProCounter.net</p>
      <p>&copy; 2025</p>
      <div>
        <Link href="https://github.com/arthursmarinho">My Github</Link>
      </div>
    </footer>
  );
}
