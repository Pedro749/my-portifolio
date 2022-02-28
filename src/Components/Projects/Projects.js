import React from 'react';
import Image from '../Helper/Image';
import styles from './Projects.module.css';
import dogs from '../../Assets/Dogs.png';
import animais from  '../../Assets/animaisFantasticos.png';
import reactRouter from  '../../Assets/listProducts.png';
import navinha from '../../Assets/jogoNavinha.png';
import mataMosquito from '../../Assets/MataMosquito.png';
import Head from '../Helper/Head';

const projects = [
  {
    title: 'Dogs',
    language: 'ReactJs',
    description: "Project made with ReactJS based on a course, it's a Social Network for Dogs, and it's available on my Github",
    link: 'https://github.com/Pedro749/Dogs',
    src: dogs
  },
  {
    title: 'Product listing',
    language: 'ReactJs',
    description: "This project is a product listing with some information about it and was made to study routes with ReactJS, and is available on my Github",
    link: 'https://github.com/Pedro749/react-router-study' ,
    src: reactRouter
  },
  {
    title: 'Ship Game',
    language: 'JavaScript',
    description: "This project was made to train JavaScript, it was inspired by the game Space Impact, and it is a game that is made entirely with HTML elements without using the canvas to draw, it is available at the link ",
    link: 'https://pedro749.github.io/Jogo-Navinha/' ,
    src: navinha
  },
  {
    title: 'Animais Fantásticos',
    language: 'JavaScript',
    description: "A site made to train JavaScript, made as a conclusion of a course, it is a listing of animals, with fictitious information about them, all the code is available on my Github,and is available at ",
    link: 'https://pedro749.github.io/Animais-Fantasticos-Origamid/' ,
    src: animais
  },
  {
    title: 'Mata Mosquito',
    language: 'JavaScript',
    description: "A simple game where the objective is to kill mosquitoes in a period of time, the source code is available on my github, and it is available at ",
    link: 'https://pedro749.github.io/MataMosquito/' ,
    src: mataMosquito
  },

]

const Projects = () => {
  return (
    <section className='container mainContainer animeLeft'>
      <Head title='Projects' />
      <h1 className='title'>Projects</h1>
      {
        projects.map((project, index) => {
          return (
            <div key={ index } className={ styles.project }>
              <span className={ styles.titleProject }>
                <h3 className='subtitle'>{ project['title'] }</h3>
                <p>{ project['language'] }</p>
              </span>
              <Image radiusBorder={'5%'} src={ project['src']}/>
              <p className={ styles.description } >{ project['description'] }
                ( <a href={project['link']} rel="noreferrer" target='_blank'>{ project['link'] }</a>)
              </p>
            </div>
          )
        })
      }
      
      
    </section>
  );
};

export default Projects;