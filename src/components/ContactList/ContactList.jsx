import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilterValue);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  if (contacts.length && filteredContacts.length) {
    return (
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.listItem}>
            <ContactListItem name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <h2 className={css.title}>Not found</h2>;
  }
}
