import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getContactFilter } from 'redux/contactFilterSlice';

import ContactItem from 'components/ContactItem';
import { Contact, StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getContactFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = contactFilter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filtredContacts = getFilteredContacts();

  return (
    <StyledList>
      {filtredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactItem contact={contact} />
        </Contact>
      ))}
    </StyledList>
  );
};

export default ContactList;
