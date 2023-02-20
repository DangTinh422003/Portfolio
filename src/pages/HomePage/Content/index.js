import clsx from 'clsx';
import styles from './Content.module.scss';
import Control from './components/Control';

function Content() {
  return (
    <div className={clsx('Content', styles.Content)}>
      <div className={clsx('container', styles.container)}>
        <h1 className={clsx('Heading', styles.Heading)}>
          I'm Cao Dang Tinh <span>Web Developer !</span>
        </h1>
        <div className={clsx('desc', styles.desc)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt veritatis beatae autem dolore
          recusandae consequuntur rerum amet. Asperiores, ducimus a sed libero in quia magni enim impedit nobis
          voluptates! Soluta laudantium id non dolor ratione blanditiis nobis minima, corporis enim excepturi sequi
          dolore eveniet omnis officiis obcaecati culpa vero, quos vitae natus facilis aliquam est voluptatum adipisci.
          Dignissimos, libero.
        </div>
        <Control></Control>
      </div>
    </div>
  );
}

export default Content;
