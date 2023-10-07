import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}> Phonebook </h1>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
