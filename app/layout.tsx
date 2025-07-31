import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // ✅ Icons imported here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Recipe Generator",
  description: "Create custom recipes from your own ingredients using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-orange-50 text-gray-800"}>
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-4 border-b-2 bg-white shadow-md sticky top-0 z-50">
          <h1 className="text-xl font-bold text-green-700">RecipeAI 🍽️</h1>
          <div className="flex space-x-6 text-lg font-medium">
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
            <Link href="/create" className="hover:text-green-600 transition">Create</Link>
            <Link href="/recipes" className="hover:text-green-600 transition">Recipes</Link>
            <Link href="/#how_it_works" className="hover:text-green-600 transition">How it Works</Link>

          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="mt-16 px-10 py-6 border-t-2 bg-white shadow-inner text-center">
          <p className="text-lg mb-4">
            Stay connected with us for the latest updates, tips, and delicious recipes.
          </p>
          <div className="flex justify-center gap-8 text-2xl text-green-700">
            <a href="#" aria-label="Facebook" className="hover:text-green-900">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-900">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-900">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">© 2025 RecipeAI. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

