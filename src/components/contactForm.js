'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ContactFormSchema from '@/utils/contactFormSchema';
import FieldCustom from './fieldCustom';
import styles from '@/styles/contactform.module.css';
import ButtonCustom from './buttonCustom';

function ContactForm() {
  return (
    <div className="flex justify-center">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form
          className={`${styles['contact-form']} gap-6 text-2xl text-light grid p-6 bg-primary shadow-[10px_10px_0px_0px_#33CCCC]`}
        >
          <FieldCustom
            name="name"
            type="text"
            id="name"
            label="Nombre"
            placeholder="Jane Doe"
            className="px-2 py-1 text-primary bg-light "
          />
          <FieldCustom
            name="email"
            type="text"
            id="email"
            label="Email"
            placeholder="jdoe@email.com"
            className="px-2 py-1 text-primary bg-light"
          />
          <FieldCustom
            name="message"
            type="textarea"
            id="message"
            label="Mensaje"
            placeholder="mensaje..."
            className="px-2 py-1 text-primary bg-light"
          />
          <ButtonCustom type="submit">Enviar</ButtonCustom>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
