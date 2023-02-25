import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Control.module.scss';

function Control() {
  return (
    <div className={clsx('Control', styles.Control)}>
      <Link to="/portfolio">
        <div className={clsx('btn', styles.btn)}>
          <div className={clsx('btn_icon', styles.btn_icon)}>
            <i className="far fa-comment-alt-smile"></i>
          </div>
          <div className={clsx('btn_text', styles.btn_text)}>SEND MESSAGE</div>
        </div>
      </Link>
    </div>
  );
}

export default Control;
