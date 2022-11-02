import { ContactsTable } from "./components/ContactsTable";
import { Header } from "./components/Header";
import { SearchContactForm } from "./components/SearchContactForm";
import { FooterContainer, HomeContainer, MainContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <MainContainer>
        <main>
          <SearchContactForm />

          <ContactsTable />
        </main>
      </MainContainer>
      <FooterContainer>
        <footer>
          <span>
            Developed by Pixel Wave
          </span>
        </footer>
      </FooterContainer>
    </HomeContainer>
  )
}