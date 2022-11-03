import produce from 'immer'

import { actionTypes } from './actions'

interface contactsData {
  id: number
  name: string
  email: string
  phone: string
}

export interface contactsListState {
  list: contactsData[]
  status: 'set' | 'setting' | 'unset'
}

export function contactsListReducer(state: contactsListState, action: any) {
  switch (action.type) {
    case actionTypes.SET_CONTACTS_LIST: {
      return produce(state, (draft) => {
        draft.list = action.payload

        draft.status = 'set'
      })
    }

    case actionTypes.SET_CONTACTS_LIST_STATS: {
      return produce(state, (draft) => {
        draft.status = action.payload
      })
    }
  }

  return state
}
