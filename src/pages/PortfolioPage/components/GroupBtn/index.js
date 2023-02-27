import styles from './GroupBtn.module.scss';
import clsx from 'clsx';
import Button from './Button';

function GroupBtn() {
  const handleActive = (e, activeClass) => {
    e.target.parentElement.querySelectorAll('button').forEach((btn) => {
      btn.classList.remove(activeClass);
    });
    e.target.classList.add(activeClass);
  };

  return (
    <div className={clsx(styles.GroupBtn)}>
      <Button onActive={handleActive} defaultActive>
        ALL
      </Button>
      <Button onActive={handleActive}>CSS/JAVASCRIPT</Button>
      <Button onActive={handleActive}>SCSS/REACT</Button>
      <Button onActive={handleActive}>RESTFULL API</Button>
    </div>
  );
}

export default GroupBtn;
