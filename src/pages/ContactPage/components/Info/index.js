import styles from './Info.module.scss';
import clsx from 'clsx';

function Info() {
  return (
    <div className={clsx(styles.Info)}>
      {/* heading */}
      <h3 className={styles.heading}>DON'T BE SHY !</h3>

      {/* desc */}
      <p className={styles.desc}>
        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities
        to be part of your visions.
      </p>

      {/* info list */}
      <ul className={styles.infoList}>
        <li>
          <div className={styles.icon}>
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <span>Address</span>
          Ba Ria - Vung Tau
        </li>
        <li>
          <div className={styles.icon}>
            <i className="fas fa-envelope-open"></i>
          </div>
          <span>Email</span>
          caodangtinh04022003@gmail.com
        </li>
        <li>
          <div className={styles.icon}>
            <i className="fas fa-phone-volume"></i>
          </div>
          <span>Phone</span>
          08620xxx42
        </li>
      </ul>

      {/* contact btn */}
      <div className={styles.contactBtn}>
        <a
          href="https://www.facebook.com/people/T%C3%ACnh-%C4%90%C4%83ng-Pt/100041672193815/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://github.com/DangTinh422003?tab=repositories" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Info;
