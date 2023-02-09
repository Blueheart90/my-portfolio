'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ContactFormSchema from '@/utils/contactFormSchema';
import FieldCustom from './fieldCustom';
import styles from '@/styles/contactform.module.css';
import ButtonCustom from './buttonCustom';

function ContactForm() {
  const handleSubmit = async (values) => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: values.email,
        fullname: values.name,
        subject: 'contacto subject',
        message: values.message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };
  return (
    <div className="max-w-lg mx-auto">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form
          className={`gap-6 text-2xl text-light grid p-6 bg-primary shadow-[10px_10px_0px_0px_#33CCCC]`}
        >
          <FieldCustom
            name="name"
            type="text"
            id="name"
            label="Nombre"
            placeholder="Jane Doe"
            className="w-full px-2 py-1 text-primary bg-light"
          />
          <FieldCustom
            name="email"
            type="text"
            id="email"
            label="Email"
            placeholder="jdoe@email.com"
            className="w-full py-1 x-2 text-primary bg-light"
          />
          <FieldCustom
            name="message"
            type="textarea"
            id="message"
            label="Mensaje"
            placeholder="mensaje..."
            className="w-full px-2 py-1 text-primary bg-light"
          />
          <ButtonCustom type="submit">Enviar</ButtonCustom>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
