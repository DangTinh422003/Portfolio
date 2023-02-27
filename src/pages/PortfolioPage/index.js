import clsx from 'clsx';
import styles from './PortfolioPage.module.scss';
import Heading from '../../components/GlobalCoponents/Heading';
import PageOverlay from '../../components/GlobalCoponents/PageOverlay';
import GroupBtn from './components/GroupBtn';
import Items from './components/Items';

function PortfolioPage() {
  return (
    <div className={clsx(styles.PortfolioPage)}>
      <PageOverlay></PageOverlay>
      <Heading titles={['MY ', 'PORTFOLIO']} subTitle={'WORKS'} />
      <div className={clsx('container', styles.container)}>
        {/* control group */}
        <GroupBtn></GroupBtn>

        {/* items */}
        <Items></Items>
      </div>
    </div>
  );
}

export default PortfolioPage;
