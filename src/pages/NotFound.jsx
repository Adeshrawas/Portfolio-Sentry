import { Link } from "react-router-dom";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-lg">Page Not Found</p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:scale-105 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
