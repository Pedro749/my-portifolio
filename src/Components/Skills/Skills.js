import React from 'react';
import styles from './Skills.module.css';
import Image from '../Helper/Image';
import JS from '../../Assets/javascript.png';
import ReactJS from '../../Assets/react.png';
import html5 from '../../Assets/html.png';
import css from  '../../Assets/css.png';
import php from  '../../Assets/php.png';
import mysql from '../../Assets/mysql.png';
import figma from '../../Assets/figma.png';
import Head from '../Helper/Head';

const skills = [
  {
    language: 'JavaScript',
    info: "I use Javascript on a daily basis in my work and it's also my main language at the moment, I've done some projects that involve the use of it, from clocks to a game inspired by space impact.",
    src: JS
  },
  {
    language: 'ReactJS',
    info: "I learned React this year, I still have little experience with this library, but I've done some projects based on courses, and by the way this portfolio was made to study it",
    src: ReactJS
  },
  {
    language: 'HTML5',
    info: "Since I discovered the world of programming, I learned this markup language, and I also use it almost always, since the WEB itself is built using it, I believe that HTML is present in all my projects.",
    src: html5
  },
  {
    language: 'CSS',
    info: "The css was what made my eyes shine when I started studying, the possibility of customizing an entire page the way I wanted, it was very important to arouse interest in the frontend, and I use it to this day in basically all my projects.",
    src: css
  },
  {
    language: 'PHP',
    info: "PHP was the language I chose to learn first to get into the backend world and I currently work as a fullstack PHP programmer, I have some projects done in this language on my github.",
    src: php
  },
  {
    language: 'Mysql',
    info: "Mysql I learned because I needed to access the database at my current job, I'm not very familiar with it but I can get by with it.",
    src: mysql
  },
  {
    language: 'FIGMA',
    info: "I use figma because it is an excellent tool and very easy to access, even this portfolio was designed using it.",
    src: figma
  },
];

const Skills = () => {
  return (
    <section className={`container mainContainer animeLeft ${ styles.skills }`}>
      <Head title='Skills' />
      <h1 className='title'>Skills</h1>
      <div>
        {
          skills.map((skill, index) => {
            return (
              <div key={ index } className={ styles.skill }>
                <span className={ styles.titleSkill }>
                  <Image src={ skill['src'] } />
                  <h3 className='subtitle'>{ skill['language'] }</h3>
                </span>
                <p>{ skill['info'] }</p>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Skills;