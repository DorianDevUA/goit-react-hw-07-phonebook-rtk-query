import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/mockApi';
import { selectContactFilter } from 'redux/contactFilterSlice';
import { getFilteredContactsByName } from 'utils/getFilteredContacts';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';
import LinkButton from 'components/LinkButton';
import { ImUserPlus } from 'react-icons/im';

const PhonebookPage = () => {
  const { data: contacts } = useGetAllContactsQuery();
  const filter = useSelector(selectContactFilter);

  const filtredContacts = useMemo(
    () => getFilteredContactsByName(contacts, filter),
    [filter, contacts],
  );

  return (
    <>
      <h1>Phonebook</h1>
      <LinkButton
        to="create"
        title="Add new contact"
        aria-label="Add new contact"
      >
        <ImUserPlus />
      </LinkButton>
      <ContactFilter />

      <h2>Contacts</h2>
      {contacts && <ContactList contacts={filtredContacts} />}
    </>
  );
};

export default PhonebookPage;
