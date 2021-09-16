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
              Sou um desenvolvedor FullStack.
            </p>
          )}
          imgTest={bannerPic}
        />
      )}
      />
      <article className={`box ${styles.homeArticle}`}>
        <p>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
          O Lorem Ipsum tem vindo a ser o texto
          padrão usado por estas indústrias desde o ano de 1500,
          quando uma misturou os caracteres de um texto para criar um espécime de livro.
          Este texto não só sobreviveu 5 séculos,
          mas também o salto para a tipografia electrónica,
          mantendo-se essencialmente inalterada.
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
          encontrar em outro lugar.
        </p>
      </main>
    </div>
  );
}
