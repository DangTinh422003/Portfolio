import clsx from 'clsx';
import styles from './Heading.module.scss';

function Heading({ titles, subTitle }) {
  return (
    <div className={clsx('Heading', styles.Heading)}>
      <h1 className={clsx('titles', styles.titles)}>
        <span>{titles[0]}</span>
        {titles[1]}
      </h1>
      <h2 className={clsx('subTitle', styles.subTitle)}>{subTitle}</h2>
    </div>
  );
}

export default Heading;
