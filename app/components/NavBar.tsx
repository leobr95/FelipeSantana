'use client';

import Image from 'next/image';
import { useState } from 'react';
import '@/app/(portafolio)/landing/styles/Navbar.css';
import logo from '@/app/fotografias/LOGO ICON FELIPE SANTANA .png';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="chl-nav" role="banner">
      <div className="chl-nav-inner" aria-label="Barra de navegación">
        {/* IZQUIERDA: Logo */}
        <a href="#hero" className="chl-logo" aria-label="Inicio">
          {/* Cambia el src por tu logo real */}
          <Image
            src={logo}
            alt="Logo Christian Felipe"
            width={45}
            height={45}
            priority
          />
        </a>

        {/* CENTRO: Nombre */}
        <div className="chl-brand" aria-label="Marca personal">
          {/* Desktop / tablet: nombre completo */}
          <span className="brand-full">Christian Felipe Meneses Santana</span>
          {/* Móvil: primer nombre + primer apellido */}
          <span className="brand-short">Christian Meneses</span>
        </div>

        {/* DERECHA: Menú */}
        <button
          className={`chl-burger ${open ? 'is-open' : ''}`}
          aria-controls="chl-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="chl-menu"
          className={open ? 'chl-menu is-open' : 'chl-menu'}
          onClick={() => setOpen(false)}
        >
          <a href="#activities">Acerca de</a>
          <a href="#services">Servicios</a>
          <a href="#blog">Blog</a>
          <a href="#contact" className="btn btn-nav">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
