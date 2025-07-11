import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white shadow-md sticky top-0 z-50">
      <div className="flex justify-center gap-8 text-lg font-semibold">
        <Link href="/" className="hover:text-yellow-300 flex items-center gap-1"><FaHome /> Home</Link>
        <Link href="/about" className="hover:text-yellow-300 flex items-center gap-1"><FaUser /> About</Link>
        <Link href="/projects" className="hover:text-yellow-300 flex items-center gap-1"><FaProjectDiagram /> Projects</Link>
        <Link href="/experience" className="hover:text-yellow-300 flex items-center gap-1"><FaBriefcase /> Experience</Link>
        <Link href="/contact" className="hover:text-yellow-300 flex items-center gap-1"><FaEnvelope /> Contact</Link>
      </div>
    </nav>
  );
}