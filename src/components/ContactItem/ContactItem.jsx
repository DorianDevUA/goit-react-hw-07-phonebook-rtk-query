import { useDispatch } from 'react-redux';
import { ImPhone, ImUser } from 'react-icons/im';
import { MdOutlineClear as DeleteContactBtn } from 'react-icons/md';
import { deleteContact } from 'redux/contactsSlice';
import { ContactCard, StyledIconBtn } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact({ id }));
  };

  return (
    <ContactCard>
      <ul>
        <li>
          <ImUser />
          <span>{name}</span>
        </li>
        <li>
          <ImPhone />
          <span>{number}</span>
        </li>
      </ul>

      <StyledIconBtn
        type="button"
        onClick={handleDelete}
        aria-label={`Delete contact`}
      >
        <DeleteContactBtn size={24} />
      </StyledIconBtn>
    </ContactCard>
  );
};

export default ContactItem;
