import * as Dialog from '@radix-ui/react-dialog'

import { useState } from 'react';

import { NewContactDialog } from './NewContactDialog'

import { AddressBook } from "phosphor-react";

import { AppLogoContainer, HeaderContainer, NewContactButton } from "./styles";

export function  Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <HeaderContainer>
      <header>
        <AppLogoContainer>
          <AddressBook weight="fill" />

          <span>Contact +</span>
        </AppLogoContainer>

        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger asChild>
            <NewContactButton>Novo contato</NewContactButton>
          </Dialog.Trigger>
          
          <NewContactDialog setDialogIsOpenState={setIsDialogOpen} />
        </Dialog.Root>
      </header>
    </HeaderContainer>
  )
}