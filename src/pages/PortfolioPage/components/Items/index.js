import clsx from 'clsx';
import styles from './Items.module.scss';

function Items() {
  return (
    <div className={clsx(styles.Items)}>
      <div className="row">
        {/* render item */}
        <div className="col-lg-4 col-6">
          <div className={clsx(styles.item)}>
            <img
              src="https://images.unsplash.com/photo-1677504210148-e39caba87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className={clsx(styles.item)}>
            <img
              src="https://images.unsplash.com/photo-1677504210148-e39caba87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className={clsx(styles.item)}>
            <img
              src="https://images.unsplash.com/photo-1677504210148-e39caba87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className={clsx(styles.item)}>
            <img
              src="https://images.unsplash.com/photo-1677504210148-e39caba87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className={clsx(styles.item)}>
            <img
              src="https://images.unsplash.com/photo-1677504210148-e39caba87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
