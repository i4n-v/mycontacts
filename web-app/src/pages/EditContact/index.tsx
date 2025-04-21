import { ContactForm, Loader, PageHeader } from '@/components';
import useEditContact from './useEditContact';

export default function EditContact() {
  const { isLoading, contactName, contactFormRef, handleSubmit } = useEditContact();

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
      <ContactForm ref={contactFormRef} buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
