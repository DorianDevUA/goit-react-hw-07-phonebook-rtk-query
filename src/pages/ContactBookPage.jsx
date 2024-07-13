import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContactsThunk } from 'redux/operationsThunk';
import { getContactBook } from 'redux/contactsSlice';
import STATUS from 'services/state-machine';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';

const ContactsBookPage = () => {
  const dispatch = useDispatch();
  const { status, contacts, error } = useSelector(getContactBook);

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  const isLoading = status === STATUS.PENDING;
  const isContactsExist = contacts.length > 0 && status === STATUS.FULFILLD;
  const isError = status === STATUS.REJECTED;

  return (
    <>
      <div>ContactsBookPage</div>
      <ContactFilter />
      {isLoading && <div>Loading...</div>}
      {isContactsExist && <ContactList />}
      {isError && <div>{error.message}</div>}
    </>
  );
};

export default ContactsBookPage;
