import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/1.png';
import stylesPages from './pages.module.css';
import 'bulma/css/bulma.css';

export default function Contact() {
  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/contact" />
      <Banner bannerContent={(
        <Content
          h1Txt={(
            <h1>
              Meus Projetos
              {'<3'}
            </h1>
          )}
          pTxt={<p>😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓</p>}
          imgTest={bannerPic}
        />
      )}
      />
    </div>
  );
}
