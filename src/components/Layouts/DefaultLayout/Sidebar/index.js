import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const scrollTop = (e) => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={clsx('Sidebar', styles.Sidebar)}>
      <ul className={clsx('Sidebar__nav', styles.Sidebar__nav)}>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink
            to={'/'}
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? styles.isActive : '')}
          >
            <i className={clsx(styles.icon, 'fas fa-home-alt')}>
              <span className={clsx(styles.menuName)}>HOME</span>
            </i>
          </NavLink>
        </li>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink
            to={'/portfolio'}
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? styles.isActive : '')}
          >
            <i className={clsx(styles.icon, 'fas fa-briefcase')}>
              <span className={clsx(styles.menuName)}>PORFOLIO</span>
            </i>
          </NavLink>
        </li>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink
            to={'/about'}
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? styles.isActive : '')}
          >
            <i className={clsx(styles.icon, 'fas fa-user')}>
              <span className={clsx(styles.menuName)}>ABOUT</span>
            </i>
          </NavLink>
        </li>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink
            to={'/contact'}
            onClick={scrollTop}
            className={({ isActive }) => (isActive ? styles.isActive : '')}
          >
            <i className={clsx(styles.icon, 'far fa-envelope-open')}>
              <span className={clsx(styles.menuName)}>CONTACT</span>
            </i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
