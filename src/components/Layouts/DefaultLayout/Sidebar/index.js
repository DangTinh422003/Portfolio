import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import '../../../../Icon/FontAweSome/font-awesome-pro/css/all.min.css';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={clsx('Sidebar', styles.Sidebar)}>
      <ul className={clsx('Sidebar__nav', styles.Sidebar__nav)}>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.isActive : '')}>
            <i class={clsx(styles.icon, 'fas fa-home-alt')}>
              <span className={clsx(styles.menuName)}>HOME</span>
            </i>
          </NavLink>
        </li>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink to={'/portfolio'} className={({ isActive }) => (isActive ? styles.isActive : '')}>
            <i class={clsx(styles.icon, 'fas fa-archive')}>
              <span className={clsx(styles.menuName)}>PORFOLIO</span>
            </i>
          </NavLink>
        </li>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink to={'/contact'} className={({ isActive }) => (isActive ? styles.isActive : '')}>
            <i class={clsx(styles.icon, 'fas fa-user')}>
              <span className={clsx(styles.menuName)}>ABOUT</span>
            </i>
          </NavLink>
        </li>
        <li className={clsx('Sidebar__nav_item', styles.Sidebar__nav_item)}>
          <NavLink to={'/about'} className={({ isActive }) => (isActive ? styles.isActive : '')}>
            <i class={clsx(styles.icon, 'far fa-envelope-open')}>
              <span className={clsx(styles.menuName)}>CONTACT</span>
            </i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
