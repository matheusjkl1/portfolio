import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

export default function Navbar({ path }) {
  const [isActive, setIsActive] = useState({
    '/': '/', '/about': '', '/projects': '', '/contact': '',
  });
  const route = useRouter();

  useEffect(() => {
    if (route.asPath === path) setIsActive({ [path]: path });
  }, []);
  return (
    <nav className="tabs is-centered">
      <ul>
        <li className={`${route.asPath === isActive['/'] ? 'is-active' : ''}`}>
          <Link href="/">
            <a href="/" onClick={() => setIsActive({ '/': '/' })}>Home</a>
          </Link>
        </li>
        <li className={`${route.asPath === isActive['/about'] ? 'is-active' : ''}`}>
          <Link href="/about">
            <a href="/about" onClick={() => setIsActive({ '/about': '/about' })}>Sobre</a>
          </Link>
        </li>
        <li className={`${route.asPath === isActive['/projects'] ? 'is-active' : ''}`}>
          <Link href="/projects">
            <a href="/projects" onClick={() => setIsActive({ '/projects': '/projects' })}>Projetos</a>
          </Link>
        </li>
        <li className={`${route.asPath === isActive['/contact'] ? 'is-active' : ''}`}>
          <Link href="/contact">
            <a href="/contact" onClick={() => setIsActive({ '/contact': '/contact' })}>Contato</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  path: null,
};

Navbar.propTypes = {
  path: PropTypes.string,
};
