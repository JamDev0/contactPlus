import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { contactsListContext } from "../../../../hooks/useContactsList";
import { api } from "../../../../libs/axios";
import { BaseCell, Body, BodyTr, ContactsTableContainer, CustomLoadingFeedback, HeadTr, LoadingFeedbackContainer, NameCell } from "./styles";
import { NoContactsFeedback } from './components/NoContactsFeedback'

export function ContactsTable() {
const { contactsList, contactsListStatus, setContactsList, setContactsListStatus } = useContextSelector(contactsListContext, context => { return {
  contactsList: context.contactsList,
  contactsListStatus: context.contactsStatus,
  setContactsList: context.setContactsList,
  setContactsListStatus: context.setContactsListStatus,
}})

  useEffect(() => {
    if(contactsListStatus === 'unset') {
      setContactsListStatus('setting')
      api.get('contacts', {
        params: {
          _sort: 'id',
          _order: 'desc'
        }
      })
      .then(res => setContactsList(res.data))
    }
  }, [contactsListStatus])

  return (
    <>
      {
        contactsListStatus === 'set' ?
          contactsList.length > 0 ?
            <ContactsTableContainer>
              <thead>
                <HeadTr>
                  <NameCell>Nome</NameCell>

                  <BaseCell>Email</BaseCell>

                  <BaseCell>Telefone</BaseCell>
                </HeadTr>
              </thead>


              <Body>
                {
                  contactsList.map(({email, id, name, phone}) => {
                    return(
                      <BodyTr key={id}>
                        <NameCell>{name}</NameCell>
            
                        <BaseCell>{email}</BaseCell>
            
                        <BaseCell>{phone}</BaseCell>
                      </BodyTr>
                    )
                  })
                }
              </Body>
            </ContactsTableContainer>
          :
            <NoContactsFeedback />
        : 
        <LoadingFeedbackContainer>
          <CustomLoadingFeedback />
        </LoadingFeedbackContainer>
      }
    </>

  )
}