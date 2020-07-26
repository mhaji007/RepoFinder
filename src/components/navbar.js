import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <Link href="/">
          <a class="navbar-item">Repo Finder 🕵</a>
        </Link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;

