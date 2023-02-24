import clsx from 'clsx';
import styles from './Skill.module.scss';
import SkillItem from './SkillItem';

import html from '../../../../image/HTML.png';
import css from '../../../../image/CSS.png';
import scss from '../../../../image/sass.png';
import js from '../../../../image/JS.png';
import jquery from '../../../../image/Jquery.jpg';
import bootstrap from '../../../../image/boostrap.png';
import responsive from '../../../../image/responsive.png';
import react from '../../../../image/react.png';
import node from '../../../../image/node.png';
import java from '../../../../image/java.png';

function Skill() {
  return (
    <div className={clsx('skill', styles.skill)}>
      <hr className={('separator', styles.separator)}></hr>
      <h1 className={clsx('heading', styles.heading)}>MY SKILLS</h1>
      <div className={clsx('skillList', styles.skillList)}>
        <SkillItem src={html} name="HTML" />
        <SkillItem src={css} name="CSS" />
        <SkillItem src={scss} name="SCSS" />
        <SkillItem src={js} name="JS" />
        <SkillItem src={jquery} name="JQUERY" />
        <SkillItem src={bootstrap} name="BOOSTRAP" />
        <SkillItem src={responsive} name="RESPONSIVE WEB DESIGN" />
        <SkillItem src={react} name="REACTJS" />
        <SkillItem src={node} name="NODEJS" />
        <SkillItem src={java} name="JAVA" />
      </div>
    </div>
  );
}

export default Skill;
