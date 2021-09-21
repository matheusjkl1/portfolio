import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/arts/project.png';
import Card from '../components/projectCard';
import stylesPages from './pages.module.css';
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
          pTxt={<p>🤖 👨‍💻 🤖 👨‍💻 🤖 👨‍💻 🤖 👨‍💻 </p>}
          imgTest={bannerPic}
        />
      )}
      />
      <Card />
    </div>
  );
}
