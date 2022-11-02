import { ReactNode, useReducer } from "react";
import { createContext } from "use-context-selector";
import { setContactsListAction, setContactsListStatusAction } from "../reducers/contactsListReducer/actions";
import { contactsListReducer, contactsListState } from "../reducers/contactsListReducer/reducer";

interface contactListData {
  name: string
  email: string
  phone: number
}

interface contactsListContextValues {
  ContactsList: contactsListState['list']
  ContactsStatus: contactsListState['status']
  setContactsList: (lits: contactsListState['list']) => void
  setContactsListStatus: (status: contactsListState['status']) => void
}

export const contactsListContext = createContext<contactsListContextValues>({} as contactsListContextValues)

interface ContactsListProviderProps {
  children: ReactNode
}

const contactsListInitialState: contactsListState = {
  list: [],
  status: 'unset'
}

export function ContactsListProvider({ children }: ContactsListProviderProps) {
  const [{ status, list }, dispatch] = useReducer(contactsListReducer, contactsListInitialState)

  const ContactsList = list

  const ContactsStatus = status

  function setContactsList(list: contactsListState['list']) {
    dispatch(setContactsListAction(list))
  }

  function setContactsListStatus(status: contactsListState['status']) {
    dispatch(setContactsListStatusAction(status))
  }  

  return (
    <contactsListContext.Provider value={{ ContactsList, ContactsStatus, setContactsList, setContactsListStatus }}>
      {children}
    </contactsListContext.Provider>
  )
}