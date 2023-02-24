import clsx from 'clsx';
import styles from './Infomations.module.scss';
import Detail from './Detail';
import Level from './Level';

function Infomations() {
  return (
    <div className={clsx('infomations', styles.infomations)}>
      <div className='row'>
        <div className="col-12 col-lg-6">
          <Detail></Detail>
        </div>
        <div className="col-12 col-lg-6">
          <Level></Level>
        </div>
      </div>
    </div>
  );
}

export default Infomations;
