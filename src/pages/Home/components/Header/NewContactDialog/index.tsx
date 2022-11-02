import * as Dialog from '@radix-ui/react-dialog'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { X } from 'phosphor-react'

import { CloseDialogBtn, DialogContentContainer, DialogOverlay, DialogTitle, Form, Input, RegisterBnt } from './styles'

const newContactFormSchema = z.object({
  name: z.string(),
  phone: z.number(),
  email: z.string()
})

type newContactFormInputs = z.infer<typeof newContactFormSchema>

export function NewContactDialog() {
  const { register, handleSubmit } = useForm<newContactFormInputs>({
    resolver: zodResolver(newContactFormSchema)
  })

  function handleNewContactSubmit(data: newContactFormInputs) {

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
              
              <RegisterBnt>
                Cadastrar
              </RegisterBnt>
            </Form>
          </section>
        </DialogContentContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}