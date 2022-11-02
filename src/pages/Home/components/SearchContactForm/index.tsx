import { SearchContactFormContainer, SearchContactFormQueryInput, SubmitSearchContactFormBtn } from "./styles";

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { MagnifyingGlass } from "phosphor-react";

const searchContactFormSchema = z.object({
  query: z.string()
})

type searchContactInputs = z.infer<typeof searchContactFormSchema>

export function SearchContactForm() {
  const { register, handleSubmit } = useForm<searchContactInputs>({
    resolver: zodResolver(searchContactFormSchema)
  })

  function handleSearchContactFormSubmit(data: searchContactInputs) {

  }

  return(
    <SearchContactFormContainer onSubmit={handleSubmit(handleSearchContactFormSubmit)}>
      <SearchContactFormQueryInput type='text' required placeholder="Digite o nome do contato"></SearchContactFormQueryInput>

      <SubmitSearchContactFormBtn>
        <MagnifyingGlass />

        <span>
          Buscar
        </span>
      </SubmitSearchContactFormBtn>
    </SearchContactFormContainer>
  )
}