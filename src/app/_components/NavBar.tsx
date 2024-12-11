import React from 'react'
import "../../styles/navbar.css"
import Link from 'next/link'

export default function NavBar(){
    return(<nav className="bg-theme-darkpurple text-white shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <a href="#" className="hover:text-theme-pink">My Blog</a>
          </div>
      
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <Link
                href="#"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="nav-link"
              >
                Authors
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="nav-link"
              >
                About
              </Link>
            </li>
          </ul>
      
          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-theme-pink hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      )
}