import clsx from 'clsx';
import styles from './SkillItem.module.scss';

function skillItem({ src, name }) {
  return (
    <div className={clsx('skillItem', styles.skillItem)}>
      <div className={clsx('skillItemIcon', styles.skillItemIcon)}>
        <img src={src} alt="" />
      </div>
      <div className={clsx('skillItemName', styles.skillItemName)}>{name}</div>
    </div>
  );
}

export default skillItem;
