import styles from './ContactPage.module.scss';
import Heading from '../../components/GlobalCoponents/Heading';
import clsx from 'clsx';
import Info from './components/Info';
import ContactForm from './components/ContactForm';

function ContactPage() {
  return (
    <div className={clsx(styles.ContactPage)}>
      <Heading titles={['GET IN', ' TOUCH']} subTitle={'CONTACT'} />
      <div className="container">
        <Info></Info>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default ContactPage;
