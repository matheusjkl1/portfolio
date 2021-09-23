/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import bannerPic from '../images/arts/about.png';
import animePic from '../images/things like/anime.jpg';
import pcPic from '../images/things like/pc.jpeg';
import animalPic from '../images/things like/animais1.jpg';
import Content from '../components/content';
import styles from './css/about.module.css';
import stylesPages from './css/pages.module.css';
import icons from '../images/icons/icons';
import 'bulma/css/bulma.css';

export default function About() {
  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/about" />
      <Banner bannerContent={(
        <Content
          h1Txt={<h1>Sobre mim</h1>}
          pTxt={<p>aqui você pode me conhecer melhor.</p>}
          imgTest={bannerPic}
        />
      )}
      />
      <main className={`box ${styles.aboutMainContent}`}>
        <h1>Quem sou eu?</h1>
        <section className="box">
          <p>
            Aqui vou discorrer brevemente sobre mim,
            caso queira saber minhas experiências profissionais,
            por favor clique
            <AnchorLink href="#ProfessionalExperiences"> aqui </AnchorLink>
            ou veja meu
            <a href="https://www.linkedin.com/in/matheusmendes16/" target="_blank" rel="noreferrer">
              {' '}
              Linkedin
            </a>
          </p>
          <p>
            Nasci em 1998, em Curitiba capital do Paraná,
            e desde muito cedo tive contato com tecnologia,
            com Video Games, internet e etc...
          </p>
          <p>
            Em 2017 entrei para Faculdade, no curso de logística
            trabalhei na área durante 4 anos, mas sentia que faltava algo,
            tenho um carinho pela área pois lá adquiri muitos
            conhecimentos sobre gestão de projetos e pessoas.
          </p>
          <p>
            Em 2019 após me formar decidi mudar para Santo André, ABC Paulista,
            pouco tempo depois que cheguei a Pandemia aconteceu, e mudou diversos planos,
            em outubro de 2020 eu descobri a Trybe
            e um mês depois consegui passar no processo seletivo
            e ingressei na área de Desenvolvimento, no qual eu tenho me encontrado e aperfeiçoado
            cada vez mais os meus pontos fortes que são Resiliência e Dedicação.
          </p>
          <section className={styles.aboutSectionLikeThings}>
            <h1>Aqui estão algumas coisas que gosto</h1>
            <section className={styles.aboutSectionLikeThingsImages}>
              <figure className="column">
                <Image src={animePic} />
                <p>Animes</p>
              </figure>
              <figure className="column">
                <Image src={pcPic} />
                <p>Pc</p>
              </figure>
              <figure className="column">
                <Image src={animalPic} />
                <p>Animais</p>
              </figure>
            </section>
          </section>
        </section>
        <section className={styles.joinJob}>
          <h1>Você quer que trabalhemos juntos?</h1>
          <p>
            A área que iniciei como Desenvolvedor Júnior é Desenvolvimento Web,
            mas também consigo desenvolver para Mobile, utilizando Reac Native.
            Preocupo-me profundamente com os usuários, desempenho,
            acessibilidade e como tudo funciona.
          </p>
          <p>
            Foco muito em deixar meu código limpo e semântico
            se isso soa bom para você, me envie um
            <a href="/contact"> e-mail! </a>
          </p>
        </section>
        <section className={`box ${styles.stacks}`}>
          <h1>Linguagens e ferramentas</h1>
          <section className={styles.stacksImages}>
            {icons.map(({ alt, srcImage }) => (
              <figure>
                <img
                  alt={alt}
                  src={srcImage}
                />
              </figure>
            ))}
          </section>
        </section>
        <section id="ProfessionalExperiences">
          <h1>Experiências Profissionais e Cursos</h1>
          <section className={`${styles.professionalExperiences}`}>
            <figure>
              <img
                alt="Trybe"
                src="data:image/png;base64,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"
              />
            </figure>
            <div>
              <h2>O que é a Trybe?</h2>
              <p>
                São aproximadamente 12 meses e 1.500 horas de conteúdo,
                com aulas online e ao vivo de segunda a sexta-feira,
                das 14h às 20h.
              </p>
              <p>
                Durante o curso, realizamos projetos toda semana,
                alguns deles você pode ver aqui.Além disso também focamos bastante
                em melhorar ou desenvolver nossas Soft Skills, aprendemos sobre Criatividade,
                Liderança, Comunicação entre outras.
              </p>
            </div>
          </section>
          <section className={`box ${styles.certifications}`}>
            <h1>Certificações</h1>
            <section className={styles.aboutSectionCertificatesImages}>
              <a href="https://www.credential.net/d1a93031-0bf9-4ee9-b23a-89bce55835a3#gs.c2m0i2" target="_blank" rel="noreferrer">
                <figure className="image">
                  <img
                    alt="Trybe"
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/38772869"
                  />
                </figure>
              </a>
              <a href="https://www.credential.net/2612b22a-646c-4a96-8360-2a8f2844fee2#gs.c2m0s7" target="_blank" rel="noreferrer">
                <figure className="image">
                  <img
                    alt="Trybe"
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/32840990"
                  />
                </figure>
              </a>
              <a href="https://www.credential.net/ba37e4d9-789e-4481-bbd1-85171af16187#gs.c2m0l2" target="_blank" rel="noreferrer">
                <figure className="image">
                  <img
                    alt="Trybe"
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/38771698"
                  />
                </figure>
              </a>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}
