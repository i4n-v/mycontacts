import { IContactFormRef, IContactFormValues } from '@/components/ContactForm/types';
import { useSafeAsyncAction } from '@/hooks';
import { ContactsService } from '@/services';
import { toast } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function useEditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef<IContactFormRef | null>(null);
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const abortController = new AbortController();

    async function loadContact() {
      try {
        setIsLoading(true);

        const contact = await ContactsService.getContactById(id!, abortController.signal);

        safeAsyncAction(() => {
          if (contactFormRef.current) {
            contactFormRef.current.setFieldsValues(contact);
          }

          setContactName(contact.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        safeAsyncAction(() => {
          navigate('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();

    return () => {
      abortController.abort();
    };
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contact: IContactFormValues) {
    try {
      const updatedContact = await ContactsService.updateContact(id!, contact);

      setContactName(updatedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
