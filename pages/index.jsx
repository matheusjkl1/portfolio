import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <div href>Home</div>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <div>About Us</div>
        </Link>
      </li>
    </ul>
  );
}
