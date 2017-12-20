import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultState = {
  membership: 'none',
  sectionMembership: {
    id: 1,
    collapse: false
  },
  sectionGeneral: {
    id: 2,
    collapse: true
  },
  sectionRoyalties: {
    id: 3,
    collapse: true
  },
  sectionRequiredDocuments: {
    id: 4,
    collapse: true
  },
  sectionCreateAccount: {
    id: 5,
    collapse: true
  },
  sectionPayment: {
    id: 6,
    collapse: true
  },
  sectionReview: {
    id: 7,
    collapse: true
  }
}

export const actionTypes = {
  SET_MEMBERSHIP: 'SET_MEMBERSHIP',
  COLLAPSE_SECTION: 'COLLAPSE_SECTION',
  EXPAND_SECTION: 'EXPAND_SECTION'
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case actionTypes.SET_MEMBERSHIP:
        return Object.assign({}, state, {
          membership: action.membershipType
        })
      // case actionTypes.COLLAPSE_SECTION:
      //   return Object.assign({}, state, {
      //     id: action.id,
      //     collapse: true
      //   })
      // case actionTypes.EXPAND_SECTION:
      //   return Object.assign({}, state, {
      //     id: action.id + 1,
      //     collapse: false
      //   })
    default: return state
  }
}

// ACTIONS
export const initStore = (initialState = defaultState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const setMembershipType = (membershipType) => dispatch => {
  return dispatch({ type: actionTypes.SET_MEMBERSHIP, membershipType })
}

export const collapseSection = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.COLLAPSE_SECTION, currentSection })
}

export const expandSection = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.COLLAPSE_SECTION, currentSection })
}
