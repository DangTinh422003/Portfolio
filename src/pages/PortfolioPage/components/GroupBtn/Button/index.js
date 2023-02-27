import styles from './Button.module.scss';
import clsx from 'clsx';

function Button({ children, onActive, defaultActive }) {
  return (
    <button
      className={clsx(styles.btn, defaultActive && styles.isActive)}
      onClick={(e) => onActive(e, styles.isActive)}
    >
      {children}
    </button>
  );
}

export default Button;
