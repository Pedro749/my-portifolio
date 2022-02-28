import React from 'react';
import styles from './ItemSkill.module.css';

const SkillsItem = ({ skill } ) => {
  const [view, setView] = React.useState(skill.open);

  return (
    <li  className={ styles.itemList } onClick={ () => setView(!view) }>
      <h3 className={ `${styles.language} ${view ? styles.actives : ''}` }>{ skill['language'] } <span className={ styles.sub }>{ skill['sub'] }</span></h3>
      <p className={`${styles.use} ${view ? styles.active : ''}`}>{ skill['use'] }</p>
    </li>
);
};

export default SkillsItem;