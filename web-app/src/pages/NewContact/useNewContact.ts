import { IContactFormRef, IContactFormValues } from '@/components/ContactForm/types';
import { ContactsService } from '@/services';
import { toast } from '@/utils';
import { useRef } from 'react';

export default function useNewContact() {
  const contactFormRef = useRef<IContactFormRef | null>(null);

  async function handleSubmit(contact: IContactFormValues) {
    try {
      await ContactsService.createContact(contact);

      if (contactFormRef.current) {
        contactFormRef.current.resetFields();
      }

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

  return {
    contactFormRef,
    handleSubmit,
  };
}
