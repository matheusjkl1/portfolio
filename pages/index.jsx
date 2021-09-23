/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/arts/home.png';
import 'bulma/css/bulma.css';
import styles from './css/home.module.css';
import stylesPages from './css/pages.module.css';

export default function Home() {
  const trybeLink = 'https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h';

  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/" />
      <Banner bannerContent={(
        <Content
          h1Txt={(
            <h1>
              Matheus Mendes
            </h1>
          )}
          pTxt={(
            <p>
              Olá, sou um desenvolvedor Web FullStack.
            </p>
          )}
          imgTest={bannerPic}
        />
      )}
      />
      <article className={`box ${styles.homeArticle}`}>
        <p>
          Iniciei minha carreira na área de logística,
          mas sempre fui apaixonado por Tecnologia.
          Em 2021 entrei para a
          <a href={trybeLink} target="_blank" rel="noreferrer"> Trybe</a>
          , para me tornar um
          desenvolvedor Web Full Stack.
        </p>
        <p>
          Você pode ler um pouco mais sobre mim
          <a href="/about"> aqui.</a>
        </p>
      </article>
      <main className={`box ${styles.homeMainContent}`}>
        <h1>
          Projetos
        </h1>
        <p>
          Eu construo projetos paralelos muito pequenos
          (mas bonitos, eu acho!) Que são uma tentativa de "arte",
          ou são algo que eu preciso na minha vida e não consigo encontrar em outro lugar.
          Minha linguagem favorita é JavaScript e também sou amante de Node.js
          A maior parte do meu código pessoal está no
          <a href="https://github.com/matheusjkl1" target="_blank" rel="noreferrer"> GitHub.</a>
        </p>
      </main>
    </div>
  );
}
