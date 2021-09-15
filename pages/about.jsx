import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import bannerPic from '../images/1.png';
import Content from '../components/content';
import stylesPages from './pages.module.css';
import 'bulma/css/bulma.css';

export default function About() {
  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/about" />
      <Banner bannerContent={(
        <Content
          h1Txt={<h1>Sobre mim</h1>}
          pTxt={<p>😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓</p>}
          imgTest={bannerPic}
        />
      )}
      />
    </div>
  );
}
