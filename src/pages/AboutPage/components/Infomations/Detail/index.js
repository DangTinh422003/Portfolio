import clsx from 'clsx';
import styles from './Detail.module.scss';
import Control from './Control';

function Detail() {
  const data = [
    {
      key: 'First Name',
      value: 'Cao',
    },
    {
      key: 'Last Name',
      value: 'Dang Tinh',
    },
    {
      key: 'Birthday',
      value: '20 Years',
    },
    {
      key: 'Sex',
      value: 'Male',
    },
    {
      key: 'National',
      value: 'Vietnam',
    },
    {
      key: 'Address',
      value: 'Ba Ria - Vung Tau',
    },
    {
      key: 'Phone',
      value: '0862040xxx',
    },
    {
      key: '',
      value: 'caodangtinh04022003@gmail.com',
    },
    {
      key: 'Major',
      value: 'Computer Science',
    },
  ];

  return (
    <div className={clsx('detail', styles.detail)}>
      <h3>PERSONAL INFOS</h3>
      <ul className={clsx('infolist', styles.infolist)}>
        {data.map((item) => {
          return (
            <li>
              <span>{item.key}: </span>
              {item.value}
            </li>
          );
        })}
        <li>
          <span>Facebook: </span>
          <a href="http://www.facebook.com/profile.php?id=100041672193815">Nhấn Vào Đây</a>
        </li>
      </ul>
      <Control></Control>
    </div>
  );
}

export default Detail;
