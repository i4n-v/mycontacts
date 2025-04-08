import { IContact } from '@/@types/Contact';
import { ContactForm, Loader, PageHeader } from '@/components';
import { IContactFormValues } from '@/components/ContactForm/types';
import { ContactsService } from '@/services';
import { toast } from '@/utils';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [contact, setContact] = useState<IContact | null>(null);

  useEffect(() => {
    async function loadContact() {
      try {
        setIsLoading(true);

        const contact = await ContactsService.getContactById('aaa');
        setContact(contact);
        setIsLoading(false);
      } catch {
        navigate('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, navigate]);

  async function handleSubmit({ categoryId, ...values }: IContactFormValues) {
    try {
      const contact = {
        ...values,
        category_id: categoryId,
      };

      await ContactsService.createContact(contact);

      toast({
        type: 'success',
        text: 'Contato atualizado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao atualizar o contato!',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar Mateus Silva" />
      <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
