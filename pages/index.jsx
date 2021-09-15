/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/1.png';
import 'bulma/css/bulma.css';
import styles from './home.module.css';
import stylesPages from './pages.module.css';

export default function Home() {
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
              Sou um engenheiro de criação que constrói experiências
              maravilhosas na web. Posso aconselhar sua empresa sobre
              a plataforma da web , desempenho, interações criativas
              do usuário e aprendizado de máquina utilizável.
            </p>
          )}
          imgTest={bannerPic}
        />
      )}
      />
      <article className={`box ${styles.homeArticle}`}>
        <p>
          I've just ended an 8 year stint as a Senior Engineer
          at Google, where I worked on making music and art and
          all sorts of creative interactions with Machine Learning,
          web components and web standards, and the guts of Chromium.
          You can read a bit more about me and my past work. Most of
          my personal code is on GitHub or on Glitch.
        </p>
      </article>
      <main className={`box ${styles.homeMainContent}`}>
        <h1>
          Projetos
        </h1>
        <p>
          Eu construo projetos paralelos muito pequenos
          (mas bonitos, eu acho!) Que são uma tentativa de "arte",
          ou são algo que eu preciso na minha vida e não consigo
          encontrar em outro lugar (como praticar escrita ASL,
          acordes de ukulele, ou uhhhh entender o tempo mantendo
          em JavaScript).
          Às vezes também dou palestras em conferências,
          embora a pandemia tenha realmente afetado isso.
        </p>
      </main>
    </div>
  );
}
