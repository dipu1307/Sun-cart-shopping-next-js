'use client';

import React, { useState } from 'react';
import Link from "next/link";
import {Button} from "@heroui/react";
import { Search, ShoppingCart, UserRound, Sun } from "lucide-react";
import NavLink from './NavLink';


const Navbar = () => {
 

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    return (
      <div>
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
          <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-3">
                  <Sun size={30} className="text-amber-400" />
                  <span className="font-bold text-2xl text-green-900">SunCart</span>
                </Link>
              </div>
            </div>
            <ul className="hidden items-center gap-8 md:flex">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/products">Products</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="hidden items-center gap-6 md:flex">
              <Button isIconOnly variant="light" aria-label="Search">
                <Search size={20} />
              </Button>
              <Button
                as={Link}
                href="/cart"
                isIconOnly
                variant="light"
                aria-label="Shopping-cart"
              >
                <ShoppingCart size={20} />
              </Button>

              <div className="relative">
                <Button
                  isIconOnly
                  variant="light"
                  aria-label="Account menu"
                  onPress={() => setIsAccountOpen(!isAccountOpen)}
                >
                  <UserRound size={20} />
                </Button>

                {isAccountOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                    <Link
                      href="/login"
                      onClick={() => setIsAccountOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setIsAccountOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </header>
          {isMenuOpen && (
            <div className="border-t border-separator md:hidden">
              <ul className="flex flex-col gap-2 p-4">
                <li>
                  <Link href="/" className="block py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="block py-2">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2">
                    Contact
                  </Link>
                </li>
                <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2"
                  >
                    Login
                  </Link>
                  <Button
                    as={Link}
                    href="/register"
                    onPress={() => setIsMenuOpen(false)}
                    className="w-full bg-teal-800 text-white"
                  >
                    Register
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    );
};

export default Navbar;