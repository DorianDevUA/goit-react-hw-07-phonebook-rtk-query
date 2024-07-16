import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/operations';
import { selectPhonebook } from 'redux/selectors';
import STATUS from 'services/state-machine';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const { status, items: contacts, error } = useSelector(selectPhonebook);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const isLoading = status === STATUS.PENDING;
  const isContactsExist = contacts.length > 0 && status === STATUS.FULFILLD;
  const isError = status === STATUS.REJECTED;

  return (
    <>
      <div>PhonebookPage</div>
      <ContactFilter />
      {isLoading && <div>Loading...</div>}
      {isContactsExist && <ContactList />}
      {isError && <div>{error.message}</div>}
    </>
  );
};

export default PhonebookPage;
