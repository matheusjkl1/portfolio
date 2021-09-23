import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/arts/project.png';
import Card from '../components/projectCard';
import stylesPages from './css/pages.module.css';
import 'bulma/css/bulma.css';

export default function Projects() {
  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/projects" />
      <Banner bannerContent={(
        <Content
          h1Txt={(
            <h1>
              Meus Projetos
            </h1>
          )}
          pTxt={(
            <p>
              uma vez que meu tempo é dividido entre algumas
              coisas diferentes, não sou capaz de realizar
              todos os projetos que gostaria, mas estou
              sempre procurando um trabalho diferente e divertido.
            </p>
        )}
          imgTest={bannerPic}
        />
      )}
      />
      <Card />
    </div>
  );
}
