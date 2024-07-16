import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem';
import { Contact, StyledList } from './ContactList.styled';

const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);

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
