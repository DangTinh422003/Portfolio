import clsx from 'clsx';
import styles from './AboutPage.module.scss';
import Heading from '../../../src/components/GlobalCoponents/Heading';
import Infomations from './components/Infomations';
import Skill from './components/Skill';
import Experience from './components/Experience';
import PageOverlay from '../../components/GlobalCoponents/PageOverlay';

function AboutPage() {
  return (
    <div className={clsx('AboutPage', styles.AboutPage)}>
      <PageOverlay></PageOverlay>
      <div className={clsx('container-md container-fluid')}>
        <Heading titles={['ABOUT ', 'ME']} subTitle="RESUME" />
        <Infomations />
        <Skill />
        <Experience />
      </div>
    </div>
  );
}

export default AboutPage;
