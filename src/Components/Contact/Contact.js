import React from 'react';
import Image from '../Helper/Image';
import styles from './Contact.module.css';
import phone from '../../Assets/phone.png';
import email from '../../Assets/email.png';
import github from '../../Assets/githubContact.png';
import linkedin from '../../Assets/linkedin.png';
import Profile from '../../Assets/profile.png';
import Head from '../Helper/Head';

const Contact = () => {
  return (
    <section className={`container mainContainer ${styles.contact}`}>
      <Head title='Contact' />
      <div>
        <h1 className='title'>Contact</h1>
        <p style={{fontSize: '1.1rem', marginBottom: '3rem'}}>For contact, connect with me through social networks or send me an email</p>
        <div className={ styles.social }>
          <span className={ styles.title }>
            <Image src={ linkedin } />
            <h3 className='subtitle'>Linkedin</h3>
          </span>
          <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/pedro-augusto-pereira-florentino-5435111ab/"> 
          https://www.linkedin.com/in/pedro-augusto-pereira-florentino-5435111ab/
          </a>
        </div>
        <div className={ styles.social }>
          <span className={ styles.title }>
            <Image src={ github } />
            <h3 className='subtitle'>Github</h3>
          </span>
          <a rel="noreferrer" target='_blank' href="https://github.com/Pedro749"> 
          https://github.com/Pedro749
          </a>
        </div>
        <div className={ styles.social }>
          <span className={ styles.title }>
            <Image src={ email } />
            <h3 className='subtitle'>Email</h3>
          </span>
          <p style={{color: '#7100ff'}}>
          pedropereiraflorent@hotmail.com
          </p>
        </div>
        <div className={ styles.social }>
          <span className={ styles.title }>
            <Image src={ phone } />
            <h3 className='subtitle'>Telephone</h3>s
          </span>
          <p style={{color: '#7100ff'}}>
            +55 (63) 99203 - 6525 
          </p>
        </div>
      </div>
      <div>
      <Image radiusBorder={'50%'} src={ Profile } alt="Pedro Augusto" />
      </div>
    </section>
  );
};

export default Contact;