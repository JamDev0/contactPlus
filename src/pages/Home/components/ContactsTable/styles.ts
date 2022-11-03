import styled from 'styled-components'
import { LoadingFeedback } from './components/LoadingFeedback'

export const ContactsTableContainer = styled.table`
  width: 100%;

  font-size: 1rem;

  margin-bottom: 3.75rem;
`

export const HeadTr = styled.tr`
  width: 100%;

  display: flex;
  column-gap: 0.5rem;

  padding: 0.5rem 2rem;

  color: ${(params) => params.theme.colors.gray[500]};
`

export const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

export const BodyTr = styled.tr`
  width: 100%;

  display: flex;
  column-gap: 0.5rem;

  padding: 1.25rem 2rem;

  background-color: ${(params) => params.theme.colors.gray['700']};

  border-radius: 5px;
`

export const BaseCell = styled.td`
  flex: 1;

  min-width: fit-content;
`

export const NameCell = styled(BaseCell)`
  flex: 3.2;
`

export const LoadingFeedbackContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const CustomLoadingFeedback = styled(LoadingFeedback)`
  width: 3.125rem;
  height: 3.125rem;
`
