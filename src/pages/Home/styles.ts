import styled from "styled-components";

export const HomeContainer = styled.div`
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