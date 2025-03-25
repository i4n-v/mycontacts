import { ContactForm, PageHeader } from '@/components';
import { IContactFormValues } from '@/components/ContactForm/types';

export default function EditContact() {
  function handleSubmit(values: IContactFormValues) {
    console.log(values);
  }

  return (
    <>
      <PageHeader title="Editar Mateus Silva" />
      <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
