import clsx from 'clsx';
import styles from './HomePage.module.scss';
import Avatar from './Avatar';
import Content from './Content';

function HomePage() {
  return (
    <div className={clsx('HomePage', styles.HomePage)}>
      <div className={clsx('container', styles.container)}>
        {/* Avatar */}
        <Avatar></Avatar>

        {/* Main */}
        <Content></Content>
      </div>
    </div>
  );
}

export default HomePage;
