import * as Dialog from '@radix-ui/react-dialog'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { X } from 'phosphor-react'

import { CloseDialogBtn, DialogContentContainer, DialogOverlay, DialogTitle, Form, Input, RegisterBnt } from './styles'
import { api } from '../../../../../libs/axios'
import { useContextSelector } from 'use-context-selector'
import { contactsListContext } from '../../../../../hooks/useContactsList'

const newContactFormSchema = z.object({
  name: z.string(),
  phone: z.number().min(99999999).max(999999999),
  email: z.string()
})

type newContactFormInputs = z.infer<typeof newContactFormSchema>

interface NewContactDialogProps {
  setDialogIsOpenState: (arg: boolean) => void
}

export function NewContactDialog({ setDialogIsOpenState }: NewContactDialogProps) {
  const { register, handleSubmit, formState: {isSubmitting}, reset } = useForm<newContactFormInputs>({
    resolver: zodResolver(newContactFormSchema)
  })

  const setContactsListStatus = useContextSelector(contactsListContext, context => context.setContactsListStatus)

  async function handleNewContactSubmit(data: newContactFormInputs) {
    const phoneString = String(data.phone)

    const phoneFormatted = phoneString.substring(0, 5) + '-' + phoneString.substring(5, 8)

    await api.post('contacts', {
      ...data,
      phone: phoneFormatted
    })

    setContactsListStatus('unset')

    reset()

    setDialogIsOpenState(false)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild>
        <DialogOverlay />
      </Dialog.Overlay>

      <Dialog.Content asChild>
        <DialogContentContainer>
          <section>
            <Dialog.Title asChild>
              <DialogTitle>
                Novo Contato
              </DialogTitle>
            </Dialog.Title>
            
            <Dialog.Close asChild>
              <CloseDialogBtn>
                <X />
              </CloseDialogBtn>
            </Dialog.Close>

            <Form onSubmit={handleSubmit(handleNewContactSubmit)}>
              <Input type='text' placeholder='Nome' required {...register('name')} />

              <Input
                required
                type='number'
                placeholder='Telefone'
                {...register('phone', {
                  valueAsNumber: true
                })}
              />
              
              <Input type='text' placeholder='Email' required {...register('email')} />
              
              <RegisterBnt disabled={isSubmitting}>
                Cadastrar
              </RegisterBnt>
            </Form>
          </section>
        </DialogContentContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}