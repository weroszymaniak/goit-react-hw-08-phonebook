import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/Contacts/operations';
import { selectContacts, selectFilter } from 'redux/Contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  const handleRemove = id => {
    console.log('Deleting contact with ID:', id);

    dispatch(removeContact(id));
  };

  console.log('making contacts list', contacts);
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name + ': ' + contact.number}
          {
            <button
              className={css.button}
              type="button"
              name="delete"
              onClick={() => handleRemove(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
