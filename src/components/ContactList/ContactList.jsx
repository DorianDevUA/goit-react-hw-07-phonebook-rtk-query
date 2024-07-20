import ContactItem from 'components/ContactItem';
import { StyledList } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </StyledList>
  );
};

export default ContactList;
