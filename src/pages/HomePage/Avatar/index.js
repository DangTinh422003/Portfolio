import clsx from 'clsx';
import styles from './Avatar.module.scss';
// import avt from '../../../image/Avatar.jpg';
import avt from '../../../image/Avatar2.png';

function Avatar() {
  return (
    <div className={clsx('Avatar', styles.Avatar)}>
      <div className={clsx('AvatarWrap', styles.AvatarWrap)}>
        <img src={avt} alt="Avatar" />
      </div>
    </div>
  );
}

export default Avatar;
