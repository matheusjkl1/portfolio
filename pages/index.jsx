import React from 'react';
import Navbar from '../components/navbar';
import Content from '../components/content';
import 'bulma/css/bulma.css';

export default function Home() {
  return (
    <div className="container">
      <Navbar path="/" />
      <Content />
    </div>
  );
}
