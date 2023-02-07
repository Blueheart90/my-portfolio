import * as Yup from 'yup';

const ContactFormSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Excediste el numero de caracteres')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Debe ser un correo valido')
    .required('El email es requerido'),
  message: Yup.string()
    .min(10, 'Muy corto, minimo 10 caracteres')
    .max(500, 'Excediste el numero de caracteres')
    .required('El mensaje es requerido'),
});

export default ContactFormSchema;
