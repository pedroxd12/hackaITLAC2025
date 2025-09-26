"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-black bg-opacity-80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logos */}
        <div className="flex items-center gap-3">
          <Image
            src="/tecnm-logo.png"
            alt="Logo TecNM"
            width={40}
            height={32}
            className="h-auto w-auto max-h-8"
          />
          <Image
            src="/itlac-logo.png"
            alt="Logo ITLAC"
            width={62}
            height={32}
            className="h-auto w-auto max-h-8"
          />
          <Image
            src="/ieee-cs-logo.png"
            alt="Logo IEEE CS"
            width={52}
            height={52}
            className="h-auto w-auto max-h-10"
          />
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm">
          <a
            href="#about"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Sobre el Evento
          </a>
          <a
            href="#tracks"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Desafíos
          </a>
          <a
            href="#agenda"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Agenda
          </a>
          <a
            href="#rules"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Reglas
          </a>
        </nav>

        {/* Botón Desktop */}
        <div className="hidden md:block">
          <a
            href="https://forms.gle/68LmagkNe5Pz88TQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black font-bold py-2 px-5 rounded-full transition-transform text-sm"
          >
            Inscríbete Ahora
          </a>
        </div>

        {/* Botón Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[60] text-white focus:outline-none"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }  transition-transform duration-300 ease-in-out bg-black`}
      >
        <div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 bg-black">
          <nav className="flex flex-col items-center gap-6 text-white text-xl mb-10">
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors"
              onClick={closeMenu}
            >
              Sobre el Evento
            </a>
            <a
              href="#tracks"
              className="hover:text-cyan-400 transition-colors"
              onClick={closeMenu}
            >
              Desafíos
            </a>
            <a
              href="#agenda"
              className="hover:text-cyan-400 transition-colors"
              onClick={closeMenu}
            >
              Agenda
            </a>
            <a
              href="#rules"
              className="hover:text-cyan-400 transition-colors"
              onClick={closeMenu}
            >
              Reglas
            </a>
          </nav>
          <a
            href="https://forms.gle/68LmagkNe5Pz88TQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black font-bold py-3 px-6 rounded-full transition-transform text-lg"
            onClick={closeMenu}
          >
            Inscríbete Ahora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
