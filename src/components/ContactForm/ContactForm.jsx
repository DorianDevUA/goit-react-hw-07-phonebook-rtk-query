import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
import { useAddContactMutation, useGetAllContactsQuery } from 'redux/mockApi';
import { isContactNameExist } from 'utils/isContactNameExist';
import FormError from 'components/FormError';
import {
  LabelTitle,
  StyledButton,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';
import { Navigate } from 'react-router-dom';

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
  // const navigate = useNavigate();
  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isSuccess }] = useAddContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = (values, actions) => {
    // console.log('FormValues:', values);
    // console.log(actions);
    const { name, number } = values;
    const { resetForm } = actions;

    const contactExists = isContactNameExist(contacts, name);

    if (contactExists) {
      Notify.failure(`Контакт ${name.trim()} вже існує!`);
      return;
    }

    addContact({ name, number });
    Notify.success(`Новий контакт: ${name.trim()}!`);
    resetForm();
    // navigate('/contacts');
  };

  return (
    <>
      {isSuccess && <Navigate to="/contacts" />}
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
    </>
  );
};

export default ContactForm;
