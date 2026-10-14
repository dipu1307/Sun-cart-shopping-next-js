import { Mail, MapPin, Phone, Sun } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { name: "FAQs", href: "/faq" },
  { name: "Shipping Policy", href: "/shipping" },
  { name: "Return Policy", href: "/returns" },
  { name: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
    return (
      <footer className="bg-[#173A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href={`/`} className="mb-5 inline-flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDF2C8] text-[#244D3F]">
                  <Sun size={23} />
                </span>
                <span className="text-2xl font-bold">
                  Sun<span className="text-[#BCE49A]">Cart</span>
                </span>
              </Link>
              <p className="max-w-xs text-sm leading-7 text-gray-300">
                Your summer essentials, all in one place. Discover products that
                make every sunny day better.
              </p>
              <div className="mt-6 flex  gap-5">
                <div>
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebook size={30} />
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com" target="_blank">
                    <FaInstagram size={30} />
                  </a>
                </div>
                <div>
                  <a href="https://x.com" target="_blank">
                    <FaXTwitter size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={"link.href"}
                      className="text-sm text-gray-300 transition hover:text-[#BCE49A]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold">Customer Support</h3>

              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 transition hover:text-[#BCE49A]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold">Get in Touch</h3>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#BCE49A]"
                  />
                  <span>Bangladesh</span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={19} className="shrink-0 text-[#BCE49A]" />
                  <a
                    href="mailto:support@suncart.com"
                    className="transition hover:text-[#BCE49A]"
                  >
                    support@suncart.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={19} className="shrink-0 text-[#BCE49A]" />
                  <span>Customer Care</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-12 border-t border-white/15 pt-6 text-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} SunCart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;