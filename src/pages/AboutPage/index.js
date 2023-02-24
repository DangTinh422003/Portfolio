import clsx from 'clsx';
import styles from './AboutPage.module.scss';
import Heading from '../../../src/components/GlobalCoponents/Heading';
import Infomations from './components/Infomations';
import Skill from './components/Skill';
import Experience from './components/Experience';

function AboutPage() {
  return (
    <div className={clsx('AboutPage', styles.AboutPage)}>
      <div className={clsx('container', styles.container)}>
        <Heading titles={['ABOUT ', 'ME']} subTitle="RESUME" />
        <Infomations />
        <Skill />
        <Experience />
      </div>
    </div>
  );
}

export default AboutPage;
