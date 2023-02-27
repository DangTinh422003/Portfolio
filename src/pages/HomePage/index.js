import clsx from 'clsx';
import styles from './HomePage.module.scss';
import Avatar from './Avatar';
import Content from './Content';
import PageOverlay from '../../components/GlobalCoponents/PageOverlay';

function HomePage() {
  return (
    <div className={clsx('HomePage', styles.HomePage)}>
      <PageOverlay></PageOverlay>

      <div className={clsx(styles.container)}>
        <div className={clsx('colorBlock', styles.colorBlock)}></div>
        <Avatar></Avatar>
        <Content></Content>
      </div>
    </div>
  );
}

export default HomePage;
