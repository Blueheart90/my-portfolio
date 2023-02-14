import Title from './title';
import ContactForm from './contactForm';

const Contact = () => {
  return (
    <section id="contacto" className="p-10 bg-white dark:bg-light">
      <article className="container mx-auto">
        <Title styles={'text-primary'}>Contactame</Title>
        <div className="w-3/4 mx-auto mb-10 ">
          <p className="text-2xl">
            No dudes en enviarme un mensaje con el formulario de abajo o por el
            canal que prefieras, te responderé tan pronto como sea posible.
          </p>
        </div>
        <ContactForm />
      </article>
    </section>
  );
};

export default Contact;
