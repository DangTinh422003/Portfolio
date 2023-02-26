import clsx from 'clsx';
import styles from './PortfolioPage.module.scss';
import Heading from '../../components/GlobalCoponents/Heading';

const projects = [
  {
    id: 1,
    title: 'Tic Tac Toe game Basic',
    img: 'https://images.unsplash.com/photo-1677293498126-400a0ba42da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    src: 'https://github.com/DangTinh422003/TicTacToe_IconTest',
    demo: 'https://tic-tac-toe-icon-test.vercel.app/',
    desc: 'Web trò chơi cơ bản Tic Tac Toe, chỉ sử dụng HTML , CSS và JS',
  },
  {
    id: 2,
    title: 'Book Tours and Travel',
    img: 'https://images.unsplash.com/photo-1677264547604-23b96fd773fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    src: 'https://github.com/DangTinh422003/ReactTravel_SPA',
    demo: 'https://react-travel-spa.vercel.app/',
    desc: 'Dự án ReactJs đầu tiên, UI của 1 trang web đặt phòng và bán vé du lịch cơ bản, bài tập giữa kì môn Lập Trình Web',
  },
  {
    id: 3,
    title: 'My Portfolio',
    img: 'https://images.unsplash.com/photo-1677325408720-e83dc085f304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    src: 'https://github.com/DangTinh422003/Portfolio',
    demo: 'https://portfolio-dangtinh422003.vercel.app/',
    desc: 'Dự án ReactJs thứ 2, Web Portfolio, bao gồm tác thông tin cá nhân, các dự án đã làm, các kỹ năng, liên hệ',
  },
];

function PortfolioPage() {
  return (
    <div className={clsx(styles.PortfolioPage)}>
      <div className={clsx('container')}>
        {/* heading */}
        <Heading titles={['MY ', 'PORTFOLIOS']} subTitle={'WORKS'} />

        {/* main */}
        <div className={clsx(styles.main)}>
          <div className="row">
            {projects.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className={clsx(styles.item)}>
                    <div className={clsx(styles.wrapImg)}>
                      <img src={item.img} alt="img" width={'100%'} />
                    </div>
                    <div className={styles.content}>
                      <h3 className={clsx(styles.projectName)}>{item.title}</h3>
                      <p className={styles.desc}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
