import { contactsListState } from './reducer'

export enum actionTypes {
  SET_CONTACTS_LIST = 'SET_CONTACTS_LIST',
  SET_CONTACTS_LIST_STATS = 'SET_CONTACTS_LIST_STATS',
}

export function setContactsListAction(list: contactsListState['list']) {
  return {
    type: actionTypes.SET_CONTACTS_LIST,
    payload: list,
  }
}

export function setContactsListStatusAction(
  status: contactsListState['status'],
) {
  return {
    type: actionTypes.SET_CONTACTS_LIST_STATS,
    payload: status,
  }
}
