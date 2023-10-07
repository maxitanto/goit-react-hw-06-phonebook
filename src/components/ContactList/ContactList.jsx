import React from 'react';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filtered = useSelector(state => state.filter);

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
