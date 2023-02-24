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
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={html} name="HTML" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={css} name="CSS" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={scss} name="SCSS" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={js} name="JS" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={jquery} name="JQUERY" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={bootstrap} name="BOOSTRAP" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={responsive} name="RESPONSIVE WEB DESIGN" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={react} name="REACTJS" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={node} name="NODEJS" />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <SkillItem src={java} name="JAVA OOP" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
