"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0A0A0A]/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-black tracking-tight text-white"
        >
          LUCKY KICKFIT<span className="text-[#DC2626]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Về Chúng Tôi
          </a>

          <a
            href="#pricing"
            className="text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Giá Tập
          </a>

          <a
            href="#gallery"
            className="text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Ảnh Phòng Tập
          </a>

          <a
            href="#contact"
            className="text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Liên Hệ
          </a>

          <a
            href="#trial"
            className="rounded-md bg-[#DC2626] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#B91C1C]"
          >
            Tập thử miễn phí
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-zinc-800 bg-[#0A0A0A] transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="border-b border-zinc-800 py-4 text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Về Chúng Tôi
          </a>

          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="border-b border-zinc-800 py-4 text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Giá Tập
          </a>

          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="border-b border-zinc-800 py-4 text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Ảnh Phòng Tập
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="border-b border-zinc-800 py-4 text-sm font-bold text-white transition-colors hover:text-[#DC2626]"
          >
            Liên Hệ
          </a>

          <a
            href="#trial"
            onClick={() => setIsOpen(false)}
            className="mt-5 rounded-md bg-[#DC2626] px-5 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#B91C1C]"
          >
            Tập thử miễn phí
          </a>
        </div>
      </div>
    </header>
  );
}