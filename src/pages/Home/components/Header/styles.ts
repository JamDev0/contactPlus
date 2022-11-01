import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  background-color: ${params => params.theme.colors.gray[900]};

  > header {
    width: 100%;
    max-width: ${params => params.theme.sizes.app}; 
  }
`