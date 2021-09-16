/* eslint-disable no-console */
import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/1.png';
import Card from '../components/projectCard';
// import styles from './projects.module.css';
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
