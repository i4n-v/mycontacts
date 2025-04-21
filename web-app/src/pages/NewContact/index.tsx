import { ContactForm, PageHeader } from '@/components';
import useNewContact from './useNewContact';

export default function NewContact() {
  const { contactFormRef, handleSubmit } = useNewContact();

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm ref={contactFormRef} buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
