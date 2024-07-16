import { useDispatch } from 'react-redux';
import { ImPhone, ImUser } from 'react-icons/im';
import { MdOutlineClear as DeleteContactBtn } from 'react-icons/md';
import { deleteContactThunk } from 'redux/operations';
import { ContactCard, ContactInfo, StyledIconBtn } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ContactCard>
      <ContactInfo>
        <li>
          <ImUser />
          <span>{name}</span>
        </li>
        <li>
          <ImPhone />
          <span>{number}</span>
        </li>
      </ContactInfo>

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
