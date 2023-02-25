import styles from './ContactForm.module.scss';
import clsx from 'clsx';
import Control from './Control';

function ContactForm() {
  return (
    <div className={clsx(styles.ContactForm)}>
      <form>
        <div className="row">
          <div className={clsx('col-12 col-md-6', styles.ContactForm__group)}>
            <input type="text" name="name" placeholder="YOUR NAME" autoComplete="off" />
          </div>
          <div className={clsx('col-12 col-md-6', styles.ContactForm__group)}>
            <input type="email" name="email" placeholder="YOUR EMAIL" autoComplete="off" />
          </div>
          <div className={clsx('col-12', styles.ContactForm__group)}>
            <input type="text" name="subject" placeholder="YOUR SUBJECT" autoComplete="off" />
          </div>
          <div className={clsx('col-12', styles.ContactForm__group)}>
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              style={{ height: '200px', minHeight: '200px' }}
              autoComplete="off"
            ></textarea>
          </div>
        </div>
        <Control></Control>
      </form>
    </div>
  );
}

export default ContactForm;
