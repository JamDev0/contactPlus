import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { contactsListContext } from "../../../../hooks/useContactsList";
import { api } from "../../../../libs/axios";
import { BaseCell, Body, BodyTr, ContactsTableContainer, EmailCell, HeadTr, NameCell } from "./styles";

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
          _order: 'asc'
        }
      })
      .then(res => setContactsList(res.data))
    }
  }, [contactsListStatus])

  return (
    <ContactsTableContainer>
      <thead>
        <HeadTr>
          <NameCell>Nome</NameCell>

          <EmailCell>Email</EmailCell>

          <BaseCell>Telefone</BaseCell>
        </HeadTr>
      </thead>

      <Body>

        {
          contactsListStatus === 'set' ? 
            contactsList.map(({email, id, name, phone}) => {
              return(
                <BodyTr key={id}>
                  <NameCell>{name}</NameCell>
      
                  <EmailCell>{email}</EmailCell>
      
                  <BaseCell>{phone}</BaseCell>
                </BodyTr>
              )
            })
          : <span>Loading...</span>
        }
      </Body>
    </ContactsTableContainer>
  )
}