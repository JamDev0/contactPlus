import { CancelSearchBtn, SearchContactFormContainer, SearchContactFormQueryInput, SubmitSearchContactFormBtn } from "./styles";

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { MagnifyingGlass, X } from "phosphor-react";
import { api } from "../../../../libs/axios";
import { useContextSelector } from "use-context-selector";
import { contactsListContext } from "../../../../hooks/useContactsList";
import { useState } from "react";

const searchContactFormSchema = z.object({
  query: z.string()
})

type searchContactInputs = z.infer<typeof searchContactFormSchema>

export function SearchContactForm() {
  const { register, handleSubmit, reset, formState: {isSubmitting} } = useForm<searchContactInputs>({
    resolver: zodResolver(searchContactFormSchema)
  })

  const [isContactsQueried, setIsContactsQueried] = useState(false)

  const { setContactsList, setContactsListStatus } = useContextSelector(contactsListContext, context => {
    return {
      setContactsList: context.setContactsList,
      setContactsListStatus: context.setContactsListStatus,
    }
  })

  async function handleSearchContactFormSubmit(data: searchContactInputs) {
    setContactsListStatus('setting')

    setIsContactsQueried(true)

    await api.get('contacts', {
      params: {
        name_like: data.query,
        _sort: 'id',
        _order: 'asc'
      }
    })
    .then(res => setContactsList(res.data))
  }

  async function handleCancelSearchBtnClick() {
    setIsContactsQueried(false)
    
    setContactsListStatus('setting')
    
     await api.get('contacts', {
        params: {
          _sort: 'id',
          _order: 'desc'
        }
      })
      .then(res => setContactsList(res.data))

    reset()
  }

  return(
    <SearchContactFormContainer onSubmit={handleSubmit(handleSearchContactFormSubmit)}>
      <SearchContactFormQueryInput
        {...register('query')} 
        type='text' 
        required 
        placeholder="Digite o nome do contato"
        disabled={isSubmitting || isContactsQueried}
      />

      {
        isContactsQueried ? 
        <CancelSearchBtn
          onClick={e => {
            e.preventDefault();
            handleCancelSearchBtnClick()
          }}
          disabled={isSubmitting}
        >
          <X />

          <span>Limpar</span>
        </CancelSearchBtn>
        :
        <SubmitSearchContactFormBtn disabled={isSubmitting}>
          <MagnifyingGlass />

          <span>
            Buscar
          </span>
        </SubmitSearchContactFormBtn>
      }

    </SearchContactFormContainer>
  )
}