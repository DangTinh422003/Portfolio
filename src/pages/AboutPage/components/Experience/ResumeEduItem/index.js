import clsx from 'clsx';
import styles from './ResumeEduItem.module.scss';

function ResumeEduItem({ timer, title, subtitle }) {
  return (
    <div className={clsx('ResumeEduItem', styles.ResumeEduItem)}>
      <div className={clsx('icon', styles.icon)}>
        <i className="fas fa-bookmark"></i>
      </div>
      <div className={clsx('timer', styles.timer)}>{timer} </div>
      <div className={clsx('Heading', styles.Heading)}>
        {`${title}`}
        <span>{`${subtitle}`} </span>
      </div>
      <div className={clsx('desc', styles.desc)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum aut quisquam repudiandae ullam dolores
        est alias, provident deleniti, voluptates qui sequi possimus sed quidem iure, incidunt molestiae autem
        recusandae.
      </div>
    </div>
  );
}

export default ResumeEduItem;
