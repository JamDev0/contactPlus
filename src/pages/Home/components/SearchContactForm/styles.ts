import styled from "styled-components";

export const SearchContactFormContainer = styled.form`
  width: 100%;

  display: flex;
  column-gap: 1rem;

  margin-bottom: 1.5rem;
`

export const SearchContactFormQueryInput = styled.input`
  flex: 1;

  position: relative;

  padding: 1rem;

  border: 0;
  border-radius: 6px;

  font-size: 16px;

  background-color: ${params => params.theme.colors.gray[900]};

  color-scheme: dark;

  ::placeholder {
    color: ${params => params.theme.colors.gray[500]};
  }
`

export const SubmitSearchContactFormBtn = styled.button`
  width: 9rem;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;

  padding-inline: 1rem;

  border: 1px solid ${params => params.theme.colors.green[200]};
  border-radius: 6px;

  color: ${params => params.theme.colors.green[200]};
  font-size: 1rem;
  font-weight: bold;

  background-color: transparent;

  cursor: pointer;

  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  > svg {
    line-height: 0;
    font-size: 1.25rem;
  }

  :not(:disabled):hover {
    background-color: ${params => params.theme.colors.green[200]};

    color: ${params => params.theme.colors.white};
  }

  :disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }
`

export const CancelSearchBtn = styled.button`
  width: 9rem;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;

  padding-inline: 1rem;

  border: 1px solid ${params => params.theme.colors.red[200]};
  border-radius: 6px;

  color: ${params => params.theme.colors.red[200]};
  font-size: 1rem;
  font-weight: bold;

  background-color: transparent;

  cursor: pointer;

  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  > svg {
    line-height: 0;
    font-size: 1.25rem;
  }

  :not(:disabled):hover {
    background-color: ${params => params.theme.colors.red[200]};

    color: ${params => params.theme.colors.white};
  }

  :disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }
`