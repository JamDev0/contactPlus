import styled from 'styled-components'

export const DialogOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgb(7, 7, 7, 0.8);
`

export const DialogContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  > section {
    position: relative;

    min-width: 33.5rem;

    padding: 3rem;

    border-radius: 6px;

    background-color: ${(params) => params.theme.colors.gray[800]};

    box-shadow: 0px 4px 32px rgb(0, 0, 0, 0.8);
  }
`

export const CloseDialogBtn = styled.button`
  position: absolute;

  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  border-radius: 6px;

  line-height: 0;

  background-color: transparent;

  cursor: pointer;

  > svg {
    line-height: 0;
    font-size: 1.5rem;

    color: ${(params) => params.theme.colors.gray[500]};
  }
`

export const DialogTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 140%;
  color: ${(params) => params.theme.colors.gray[100]};

  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Input = styled.input`
  width: 100%;

  padding: 1rem;

  line-height: 140%;

  border: 0;
  border-radius: 6px;

  background-color: ${(params) => params.theme.colors.gray['900']};

  ::placeholder {
    color: ${(params) => params.theme.colors.gray[500]};
  }

  &[aria-error='true'] {
    box-shadow: none;

    outline: 1px solid ${(params) => params.theme.colors.red[200]};
  }
`

export const RegisterBnt = styled.button`
  width: 100%;

  font-weight: bold;
  color: ${(params) => params.theme.colors.white};

  padding: 1rem;

  border: 0;
  border-radius: 6px;

  background-color: ${(params) => params.theme.colors.green[400]};

  margin-top: 2.5rem;

  cursor: pointer;

  transition: background-color 300ms ease-in-out;

  :not(:disabled):hover {
    background-color: ${(params) => params.theme.colors.green[200]};
  }

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const InputErrorMessage = styled.p`
  color: ${(params) => params.theme.colors.red[200]};
`
