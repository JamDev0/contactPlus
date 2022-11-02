import { Header } from "./components/Header";
import { SearchContactForm } from "./components/SearchContactForm";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <main>
          <SearchContactForm />
        </main>
      </HomeContainer>
    </>
  )
}