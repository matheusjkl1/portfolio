import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li>
          <Link href="/">
            <a
              href="/"
              className={styles.navClick}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="/about" className={styles.navClick}>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a href="/projects" className={styles.navClick}>Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a href="/contact" className={styles.navClick}>Contato</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
