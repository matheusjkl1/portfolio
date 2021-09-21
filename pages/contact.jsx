/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Content from '../components/content';
import bannerPic from '../images/arts/contact.png';
import gitIco from '../images/icons/git.png';
import linkedinIco from '../images/icons/linkedin.png';
import gitConnectIco from '../images/icons/gitConnect.png';
import stylesPages from './pages.module.css';
import styles from './contact.module.css';
import 'bulma/css/bulma.css';

export default function Contact() {
  const [formState, setFormState] = useState(null);
  const [data, setData] = useState({ name: '', email: '' });
  const [inputClassName, setInputClassName] = useState({ name: 'is-hovered', email: 'is-hovered' });
  const form = useRef();

  const resultSendForm = (className, text) => (
    <div className={className}>{text}</div>
  );

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email).toLowerCase());
    if (!regex) return setInputClassName({ ...inputClassName, email: 'is-danger' });
    return setInputClassName({ ...inputClassName, email: 'is-success' });
  }

  function validateName() {
    const regex = /^[A-Za-z ]+$/.test(data.name);
    if (!regex) return setInputClassName({ ...inputClassName, name: 'is-danger' });
    return setInputClassName({ ...inputClassName, name: 'is-success' });
  }

  const updateName = (e) => {
    e.persist();
    validateName();
    setData((old) => ({
      ...old,
      name: e.target.value,
    }));
  };

  const updateEmail = (e) => {
    e.persist();
    validateEmail();
    setData((old) => ({
      ...old,
      email: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    try {
      e.preventDefault();
      setFormState(resultSendForm('notification is-warning is-light', 'Enviando...'));
      emailjs.sendForm('service_mn3y3lp', 'template_fsul75a', form.current, 'user_hVWFEWOWxHsweqfO53huf')
        .then((result) => {
          setFormState(resultSendForm('notification is-primary is-light', result.text));
          setTimeout(() => { setFormState(null); }, 6000);
        }, (error) => {
          console.log(error);
          setFormState(resultSendForm('notification is-danger is-light', error.text));
          setTimeout(() => { setFormState(null); }, 6000);
        });
    } catch (error) {
      setFormState(resultSendForm('notification is-danger is-light', 'Ocorreu algum Erro...'));
      setTimeout(() => { setFormState(null); }, 6000);
    }
  };
  return (
    <div className={`container ${stylesPages.body}`}>
      <Navbar path="/contact" />
      <Banner bannerContent={(
        <Content
          h1Txt={(
            <h1>
              Me Contate
            </h1>
          )}
          pTxt={<p>📪 📫 📬 📭</p>}
          imgTest={bannerPic}
        />
      )}
      />
      <main className={`box ${styles.contactMainContent}`}>
        <section className={`box ${styles.contactSectionContentForms}`}>
          <h1>Deseja me enviar um Email?</h1>
          <form className="box" ref={form} onSubmit={sendEmail}>
            <label className="label">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className={`input ${inputClassName.name}`}
                onChange={updateName}
                onBlur={validateName}
              />
            </label>
            <label className="label">
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className={`input ${inputClassName.email}`}
                onChange={updateEmail}
                onBlur={validateEmail}
              />
            </label>
            <label className="label">
              <textarea
                name="message"
                className="textarea input is-hovered"
                placeholder="Digite sua mensagem"
              />
            </label>
            <label className="label">
              <input
                type="submit"
                value="Send"
                className="button is-black"
                disabled={inputClassName.name !== 'is-success' || inputClassName.email !== 'is-success'}
              />
            </label>
          </form>
          {formState || null}
        </section>
        <section className={`box ${styles.contactSectionContent} is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd`}>
          <a href="https://github.com/matheusjkl1" target="_blank" rel="noreferrer">
            <figure className="image is-64x64 column">
              <Image src={gitIco} />
            </figure>
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/matheusmendes16/" target="_blank" rel="noreferrer">
            <figure className="image is-64x64 column">
              <Image src={linkedinIco} />
            </figure>
            <p>Linkedin</p>
          </a>
          <a href="https://gitconnected.com/matheusjkl1/resume" target="_blank" rel="noreferrer">
            <figure className="image is-64x64 column">
              <Image src={gitConnectIco} />
            </figure>
            <p>Curriculo</p>
          </a>
        </section>
      </main>
    </div>
  );
}
