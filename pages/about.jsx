/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import bannerPic from '../images/1.png';
import Content from '../components/content';
import styles from './about.module.css';
import stylesPages from './pages.module.css';
import 'bulma/css/bulma.css';

export default function About() {
  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/about" />
      <Banner bannerContent={(
        <Content
          h1Txt={<h1>Sobre mim</h1>}
          pTxt={<p>😳 😳 😳 😳</p>}
          imgTest={bannerPic}
        />
      )}
      />
      <main className={`box ${styles.aboutMainContent}`}>
        <p>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
          O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias
          desde o ano de 1500, quando uma misturou os caracteres de um texto para
          criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas
          também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.
          Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset,
          que continham passagens com Lorem Ipsum, e mais recentemente com os programas
          de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
        </p>
        <h1>Você quer que trabalhemos juntos?</h1>
        <p>
          I am not interested at the moment in a traditional
          engineering role, but I am interested in advising your company.
          My areas of expertise are the web platform,
          creative applications and interactions, and usable machine learning.
          I care deeply about users, performance, accessibility, and having things be functional.
          I am especially interested in (creative) projects that help people create things,
          public sector organizations and non profits.
          If this sounds good to you, send me an email!
        </p>
      </main>
    </div>
  );
}
