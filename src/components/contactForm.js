'use client';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ContactFormSchema from '@/utils/contactFormSchema';
import FieldCustom from './fieldCustom';
import styles from '@/styles/contactform.module.css';
import ButtonCustom from './buttonCustom';
import Alert from './alert';
import LoadingSvg from './loadingSvg';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAlert = () => {
    setIsOpen(true);
    // auto-close alert
    setTimeout(() => {
      setIsOpen(false);
    }, 7000);
  };

  const handleSubmit = async (values, resetForm) => {
    setIsLoading(true);
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
    setTimeout(() => {
      handleAlert();
      setIsLoading(false);
      resetForm();
    }, 1500);
  };
  return (
    <div className="max-w-lg pb-20 mx-auto">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
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

          {isLoading ? (
            <LoadingSvg
              width="40px"
              height="40px"
              className=" animate-spin stroke-accent"
            />
          ) : (
            <ButtonCustom type="submit">Enviar</ButtonCustom>
          )}
        </Form>
      </Formik>
      <Alert isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default ContactForm;
