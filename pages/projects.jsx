import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/arts/projects.jpg';
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
              Uma vez que meu tempo é dividido entre algumas
              coisas diferentes, não sou capaz de realizar
              todos os projetos que gostaria, mas estou
              sempre procurando um trabalho diferente e divertido.
              Aos poucos estou adicionando meus projetos, mas a maioria
              ainda esta no meu github.
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
