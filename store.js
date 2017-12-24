import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultState = {
  membership: 'none',
  sectionMembership: {
    id: 1,
    prevName: '',
    currentName: 'sectionMembership',
    nextName: 'sectionGeneral',
    collapse: false
  },
  sectionGeneral: {
    id: 2,
    prevName: 'sectionMembership',
    currentName: 'sectionGeneral',
    nextName: 'sectionRoyalties',
    collapse: true
  },
  sectionRoyalties: {
    id: 3,
    prevName: 'sectionGeneral',
    currentName: 'sectionRoyalties',
    nextName: 'sectionRequiredDocuments',
    collapse: true
  },
  sectionRequiredDocuments: {
    id: 4,
    prevName: 'sectionRoyalties',
    currentName: 'sectionRequiredDocuments',
    nextName: 'sectionPayment',
    collapse: true
  },
  sectionCreateAccount: {
    id: 5,
    prevName: 'sectionRequiredDocuments',
    currentName: 'sectionCreateAccount',
    nextName: 'sectionPayment',
    collapse: true
  },
  sectionPayment: {
    id: 6,
    prevName: 'sectionCreateAccount',
    currentName: 'sectionPayment',
    nextName: 'sectionReview',
    collapse: true
  },
  sectionReview: {
    id: 6,
    prevName: 'sectionPayment',
    currentName: 'sectionReview',
    nextName: '',
    collapse: true
  }
}

export const actionTypes = {
  SET_MEMBERSHIP: 'SET_MEMBERSHIP',
  COLLAPSE_CURRENT: 'COLLAPSE_CURRENT',
  EXPAND_NEXT: 'EXPAND_NEXT'
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case actionTypes.SET_MEMBERSHIP:
        return Object.assign({}, state, {
          membership: action.membershipType
        })
      case actionTypes.COLLAPSE_CURRENT:
        const currentName = action.currentSection.currentName
        const nextName = action.currentSection.nextName
        
        console.log(action.currentSection)

        return Object.assign({}, state, {
          [currentName]: {
            ...state[currentName],
            collapse: true
          },
          [nextName]: {
            ...state[nextName],
            collapse: false
          }
        })
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

export const collapseCurrent = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.COLLAPSE_CURRENT, currentSection })
}

export const expandNext = (foo) => dispatch => {
  return dispatch({ type: actionTypes.EXPAND_NEXT, foo })
}

// case actionTypes.EXPAND_NEXT:
//   // const currentName = action.currentSection.currentName
//   // const prevName = action.currentSection.prevName
//   // const nextName = action.currentSection.nextName
//   // const id = action.currentSection.id
//
//   console.log('EXPAND_NEXT Reducer: foo', action.foo)
//
//   return Object.assign({}, state, {
//     [currentName]: {
//       id: id,
//       collapse: false,
//       currentName: currentName,
//       nextName: nextName,
//     }
//   })
