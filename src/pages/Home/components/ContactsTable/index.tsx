import { BaseCell, Body, BodyTr, ContactsTableContainer, EmailCell, HeadTr, NameCell } from "./styles";

export function ContactsTable() {
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
        <BodyTr>
          <NameCell>Antenor Lorenzutti</NameCell>

          <EmailCell>antenor@mail.com</EmailCell>

          <BaseCell>91280-6161</BaseCell>
        </BodyTr>
      </Body>
    </ContactsTableContainer>
  )
}