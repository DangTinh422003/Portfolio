import styles from './ContactPage.module.scss';
import Heading from '../../components/GlobalCoponents/Heading';
import clsx from 'clsx';
import Info from './components/Info';
import ContactForm from './components/ContactForm';
import PageOverlay from '../../components/GlobalCoponents/PageOverlay';

function ContactPage() {
  return (
    <div className={clsx(styles.ContactPage)}>
      <PageOverlay></PageOverlay>
      <Heading titles={['GET IN', ' TOUCH']} subTitle={'CONTACT'} />
      <div className={styles.content}>
        <div className="container p-0">
          <div className="row no-gutters">
            <div className="col-12 col-lg-4">
              <Info />
            </div>
            <div className="col-12 col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
