import { useNavigate } from 'react-router-dom';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import FormError from 'components/FormError';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  LabelTitle,
  StyledButton,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const phoneRegExp =
  /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, `Name is too short`)
    .max(32, `Name is too long`)
    .required(`Name is a required field`),
  number: Yup.string()
    .matches(phoneRegExp, `Phone number is not valid`)
    .required(`Number is a required field`),
});

const ContactForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const checkNameInContacts = name => {
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  const handleSubmit = (values, actions) => {
    // console.log('FormValues:', values);
    // console.log(actions);
    const { name, number } = values;
    const { resetForm } = actions;

    const isNameExist = checkNameInContacts(name);

    if (isNameExist) {
      alert(`Контакт "${name}" вже існує!`);
      return;
    }

    dispatch(addContactThunk({ name, number }));
    resetForm();
    navigate('/contacts');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel htmlFor={nameInputId}>
          <LabelTitle>Name</LabelTitle>
          <Field type="text" name="name" id={nameInputId} />
          <FormError name="name" />
        </StyledLabel>
        <StyledLabel htmlFor={numberInputId}>
          <LabelTitle>Number</LabelTitle>
          <Field type="tel" name="number" id={numberInputId} />
          <FormError name="number" />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
