import React from 'react';
import SkillsItem from './ItemSkill';

const skills = [
  {
    language: 'JavaScript',
    sub: 'is my main language',
    use: 'I use it every day, both at work and at home studying, I love discovering new things about this language. ',
    open: true
  },
  {
    language: 'ReactJS',
    sub: 'as my library from JS for frontend',
    use: "I'm currently studying React, I'm still a beginner in this library, but I feel very comfortable with JS and it's been fun, this portfolio was made using the same.",
    open: false
  },
  {
    language: 'CSS',
    sub: ' I use it a lot to implement my projects',
    use: 'Since my first web project I used this tool and it is in basically all my projects, I feel very comfortable using it and I am always impressed when I discover new things that I can do using it',
    open: false
  },
  {
    language: 'Figma',
    sub: 'as my design tool',
    use: 'I use Figma to design my projects, due to the ease of access and the vast plugins, even this portfolio was built using this tool.',
    open: false
  },
  {
    language: 'PHP',
    sub: 'this is the language i currently use for backend',
    use: 'PHP was the language I chose to enter the Backend, I use it every day at work, where I am a fullstack PHP developer.',
    open: false
  }
];

const ListSkills = () => {

  return (
    <ul>
      {skills.map((skill, index) => {
        return(
          <SkillsItem skill={ skill } key={ index } />
        )
      })
      }
  </ul>
  );
}

export default ListSkills;