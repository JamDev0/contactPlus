import * as Dialog from '@radix-ui/react-dialog'

import { NewContactDialog } from './NewContactDialog'

import { AddressBook } from "phosphor-react";

import { AppLogoContainer, HeaderContainer, NewContactButton } from "./styles";

export function  Header() {
  return (
    <HeaderContainer>
      <header>
        <AppLogoContainer>
          <AddressBook weight="fill" />

          <span>Contact +</span>
        </AppLogoContainer>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewContactButton>Novo contato</NewContactButton>
          </Dialog.Trigger>
          
          <NewContactDialog />
        </Dialog.Root>
      </header>
    </HeaderContainer>
  )
}