import clsx from 'clsx';
import styles from './Infomations.module.scss';
import Detail from './Detail';
import Level from './Level';

function Infomations() {
  return (
    <div className={clsx('infomations', styles.infomations)}>
      <Detail></Detail>
      <Level></Level>
    </div>
  );
}

export default Infomations;
