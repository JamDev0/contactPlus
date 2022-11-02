import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
`

export const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-inline: 3rem;

  padding: 3.75rem 3rem;

  > main {
    max-width: ${params => params.theme.sizes.app};
    width: 100%;
  }
`

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: auto;
  margin-bottom: 3.125rem;

  > footer {
    max-width: ${params => params.theme.sizes.app};
    width: 100%;

    display: flex;
    justify-content: center;

    padding-top: 1.5rem;

    border: 0;
    border-top: 1px solid ${params => params.theme.colors.gray['200']};

    font-size: 1rem;
    color: ${params => params.theme.colors.gray['200']};
  }
`