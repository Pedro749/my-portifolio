import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import  { ReactComponent as Github } from '../Assets/github.svg';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation() ;
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);



  return (
    <header>
      <nav className={ styles.nav }>
        { mobile && (
          <button 
            aria-label='Menu'
            className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
            onClick={() => setMobileMenu(!mobileMenu)}
            ></button>)
        }

        <ul className={`${styles.navElements} ${mobile && styles.mobileNav} ${mobileMenu && styles.mobileNavActive} ` }>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <a href='https://github.com/Pedro749' rel="noreferrer" target='_blank'>
          <Github className={ styles.github }/>
        </a>
      </nav>
    </header>
  );
};

export default Header;