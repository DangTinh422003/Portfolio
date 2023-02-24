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
          Hello mọi người! Mình là Tình, đang là sinh viên năm 2 trường Đại học Tôn Đức Thắng, quận 7 HCM . Cơ duyên
          mình đến với IT là nhờ sở thích chơi game và đam mê làm việc với máy tính. Hè năm nhất đại học, mình tình cờ
          biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS, ReactJS, NodeJS, đang
          học thêm khóa HTML,CSS PRO và có được một số dự án cá nhân. Trải qua nhiều lần te tua, thật sự cảm ơn anh Sơn
          cũng như cộng đồng anh em đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không chán nản
          trong quá trình học tập tại trường cũng như trên F8.
        </div>
        <Control></Control>
      </div>
    </div>
  );
}

export default Content;
