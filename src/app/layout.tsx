import Link from "next/link";
import "./globals.css";
import { Inter } from "@next/font/google";
import { AnalyticsWrapper } from "./(component)/analytics";

const font = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" data-theme="mytheme">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black">
        <main className={font.className}>
          <div className="navbar bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-4xl font-bold rounded-b-md">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-link lg:hidden text-black no-animation hover:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 bg-gradient-to-r from-orange-600  to-yellow-500 rounded-box w-52 text-4xl font-bold"
                >
                  <li>
                    <Link href="/" className="text-black hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className="text-black hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/link"
                      className="text-black hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent"
                    >
                      Links
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="btn btn-ghost normal-case text-4xl text-black font-bold hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent no-animation">
              <Link href="/" >
                ValueX
              </Link>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/" className="text-black hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-black hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/link" className="text-black hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent">
                    Links
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <Link href="/link" className="btn btn-ghost normal-case text-4xl text-black font-bold hover:text-gray-100 hover:bg-transparent active:bg-transparent focus:bg-transparent">
                Login
              </Link>
            </div>
          </div>
          {children}
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
