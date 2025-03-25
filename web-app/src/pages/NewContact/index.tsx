import { ContactForm, PageHeader } from '@/components';
import { IContactFormValues } from '@/components/ContactForm/types';
import { ContactsService } from '@/services';

export default function NewContact() {
  async function handleSubmit({ categoryId, ...values }: IContactFormValues) {
    try {
      const contact = {
        ...values,
        category_id: categoryId,
      };

      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato!');
    } finally {
      //
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
