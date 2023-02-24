import clsx from 'clsx';
import styles from './Level.module.scss';

function Level() {
  return (
    <div className={clsx('level', styles.level)}>
      <div className={clsx('infoMoreCard', styles.infoMoreCard)}>
        <h3>
          2 <i class="fas fa-plus"></i>
        </h3>
        <p>
          YEARS OF <span>MENTOR CLUB</span>
        </p>
      </div>
      <div className={clsx('infoMoreCard', styles.infoMoreCard)}>
        <h3>
          3<i class="fas fa-plus"></i>
        </h3>
        <p>
          COMPLETED <span>PROJECTS</span>
        </p>
      </div>
      <div className={clsx('infoMoreCard', styles.infoMoreCard)}>
        <h3>
          2<i class="fas fa-plus"></i>
        </h3>
        <p>
          HAPPY <span>CUSTOMER</span>
        </p>
      </div>
      <div className={clsx('infoMoreCard', styles.infoMoreCard)}>
        <h3>
          1<i class="fas fa-plus"></i>
        </h3>
        <p>
          AWARD <span>WON</span>
        </p>
      </div>
    </div>
  );
}

export default Level;
