import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isAdded = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isAdded) {
      alert(`${contact.name}  is already in contacts.`);
      return;
    }

    const newContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts(prevContacts => {
      return [newContact, ...prevContacts];
    });
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  //Фільтрація незалежна від регістру
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}> Phonebook </h1>
      <ContactForm createContact={addContact} />

      <h2 className={css.subTitle}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
