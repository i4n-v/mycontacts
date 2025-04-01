import { ContactForm, PageHeader } from '@/components';
import { IContactFormValues } from '@/components/ContactForm/types';
import { ContactsService } from '@/services';
import { toast } from '@/utils';

export default function NewContact() {
  async function handleSubmit({ categoryId, ...values }: IContactFormValues) {
    try {
      const contact = {
        ...values,
        category_id: categoryId,
      };

      await ContactsService.createContact(contact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
