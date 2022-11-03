import * as Dialog from '@radix-ui/react-dialog'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { X } from 'phosphor-react'

import { CloseDialogBtn, DialogContentContainer, DialogOverlay, DialogTitle, Form, Input, InputErrorMessage, RegisterBnt } from './styles'
import { api } from '../../../../../libs/axios'
import { useContextSelector } from 'use-context-selector'
import { contactsListContext } from '../../../../../hooks/useContactsList'

import { ErrorMessage } from '@hookform/error-message'

const newContactFormSchema = z.object({
  name: z.string(),
  phone: z.number({invalid_type_error: 'Esse campo é obrigatório', required_error: 'Esse campo é obrigatório'}).min(99999999, 'São precisos 9 dígitos').max(999999999, 'Não são permitidos mais que 9 dígitos'),
  email: z.string().email('Email inválido')
})

type newContactFormInputs = z.infer<typeof newContactFormSchema>

interface NewContactDialogProps {
  setDialogIsOpenState: (arg: boolean) => void
}

export function NewContactDialog({ setDialogIsOpenState }: NewContactDialogProps) {
  const { register, handleSubmit, formState: {isSubmitting, errors}, reset } = useForm<newContactFormInputs>({
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

  console.log(errors.phone)

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
              <CloseDialogBtn onClick={() => reset()}>
                <X />
              </CloseDialogBtn>
            </Dialog.Close>

            <Form onSubmit={handleSubmit(handleNewContactSubmit)}>
              <Input type='text' placeholder='Nome' required {...register('name')} aria-error={errors.name !== undefined ? !!errors.name : false} />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <InputErrorMessage>{message}</InputErrorMessage>}
              />

              <Input
                required
                type='number'
                placeholder='Telefone'
                {...register('phone', {
                  valueAsNumber: true
                })}
                aria-error={errors.phone !== undefined ? !!errors.phone : false}
              />

              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ message }) => <InputErrorMessage>{message}</InputErrorMessage>}
              />
              
              <Input type='email' placeholder='Email' required {...register('email')} aria-error={errors.email !== undefined ? !!errors.email : false} />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <InputErrorMessage>{message}</InputErrorMessage>}
              />
              
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