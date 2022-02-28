import React from 'react';
import styles from './Home.module.css';
import Profile  from '../../Assets/profile.png';
import ListSkills from './ListSkills';
import Image from '../Helper/Image'
import Head from '../Helper/Head';

const Home = () => {
  return (
    <>
      <Head title='Home' />
      <main className={ `${styles.home} mainContainer animeLeft` }>
        <div>
          <h1 className='title'>Pedro Augusto</h1>
          <h3 className={`subtitle`}>Frontend Developer, Student and  programming lover</h3>
          <p className='paragraph'>
            I work as a systems developer, course Systems Analysis and Development, I'm always looking for more learning of the most varied types and in my spare time I love playing video games.
          </p>
        </div>
        <div className={ styles.divImg }>
          <Image radiusBorder={'50%'} src={ Profile } alt="Pedro Augusto" />
        </div>
      </main>
      <section className={`${styles.homeSection} animeLeft` }>
        <h1 className='title'>Skills & Uses</h1>
        <ListSkills />
      </section>
    </>
  );
};

export default Home;