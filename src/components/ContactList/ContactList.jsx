import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllContacts } from 'redux/operations';
import { getContactBook } from 'redux/contactsSlice';
import { getContactFilter } from 'redux/contactFilterSlice';

import ContactItem from 'components/ContactItem';
import { Contact, StyledList } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContactBook);
  const contactFilter = useSelector(getContactFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = contactFilter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filtredContacts = getFilteredContacts();

  return (
    <>
      <StyledList>
        {filtredContacts.map(contact => (
          <Contact key={contact.id}>
            <ContactItem contact={contact} />
          </Contact>
        ))}
      </StyledList>
    </>
  );
};

export default ContactList;
