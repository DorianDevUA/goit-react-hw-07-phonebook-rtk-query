import { useDeleteContactMutation } from 'redux/mockApi';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ImPhone, ImUser } from 'react-icons/im';
import { MdOutlineClear as DeleteContactBtn } from 'react-icons/md';
import {
  ContactCard,
  ContactInfo,
  StyledIconBtn,
  StyledListItem,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = () => {
    Confirm.show(
      `Видалення контакту`, // notification title
      `Ви дійсно бажаєте видалити контакт: ${name}?`, //notification message
      `Видалити`, // confirm button
      `Скасувати`, // cancel button
      () => {
        // Confirm button func
        deleteContact(id);
        Notify.failure(`Контакт: ${name.trim()} було видалено!`);
      },
      () => {
        // Cancel button func
        // Notify.info('Скасування видалення контакту');
      },
      {
        // Custom options
        titleColor: '#f44336',
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#f44336',
        cancelButtonColor: '#f8f8f8',
        cancelButtonBackground: '#32c682',
      },
    );
  };

  return (
    <StyledListItem>
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
    </StyledListItem>
  );
};

export default ContactItem;
