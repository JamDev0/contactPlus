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

        <NewContactButton>Novo contato</NewContactButton>
      </header>
    </HeaderContainer>
  )
}