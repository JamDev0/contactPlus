import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  padding-inline: 3rem;

  background-color: ${(params) => params.theme.colors.gray[900]};

  > header {
    width: 100%;
    max-width: ${(params) => params.theme.sizes.app};

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const AppLogoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  font-weight: bold;
  font-size: 1.6rem;
  color: ${(params) => params.theme.colors.gray[100]};

  > svg {
    font-size: 3.125rem;
    line-height: 0;

    color: ${(params) => params.theme.colors.green[400]};
  }
`

export const NewContactButton = styled.button`
  padding: 0.75rem 1.25rem;

  border-radius: 6px;
  border: 0;

  background-color: ${(params) => params.theme.colors.green[400]};

  font-weight: bold;
  font-size: 1rem;
  color: ${(params) => params.theme.colors.white};

  transition: background-color 300ms ease-in-out;

  cursor: pointer;

  :hover {
    background-color: ${(params) => params.theme.colors.green[200]};
  }
`
