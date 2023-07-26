import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/Contacts/selectors';
import { fetchContacts } from 'redux/Contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
