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
    nextName: 'sectionCreateAccount',
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
  },
  addresses: []
}

export const actionTypes = {
  SET_MEMBERSHIP: 'SET_MEMBERSHIP',
  MOVE_FORWARD: 'MOVE_FORWARD',
  MOVE_BACK: 'MOVE_BACK',
  ADD_RESIDENCE_ADDRESS: 'ADD_RESIDENCE_ADDRESS',
  ADD_ADDRESS: 'ADD_ADDRESS'
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case actionTypes.SET_MEMBERSHIP:
        return Object.assign({}, state, {
          membership: action.membershipType
        })
      case actionTypes.MOVE_FORWARD:
        const currentName = action.currentSection.currentName
        const nextName = action.currentSection.nextName

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
      case actionTypes.MOVE_BACK:
        const currentSection = action.currentSection.currentName
        const prevSection = action.currentSection.prevName

        if (prevSection != '') {
          return Object.assign({}, state, {
            [currentSection]: {
              ...state[currentSection],
              collapse: true
            },
            [prevSection]: {
              ...state[prevSection],
              collapse: false
            }
          })
        }
        case actionTypes.ADD_ADDRESS:
          console.log('REDUCER ADD_ADDRESS ', action.address)

          const type = action.address.type
          const country = action.address.country
          const addressOne = action.address.addressOne
          const addressTwo = action.address.addressTwo
          const city = action.address.city
          const addressState = action.address.state
          const zip = action.address.zip

          return Object.assign({}, state, {
            addresses:[
              ...state.addresses,
              {
                type: type,
                country: country,
                addressOne: addressOne,
                addressTwo: addressTwo,
                city: city,
                state: addressState,
                zip: zip,
                completed: true
              }
            ]
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

export const moveForward = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.MOVE_FORWARD, currentSection })
}

export const moveBack = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.MOVE_BACK, currentSection })
}

export const addResidenceAddress = (address) => dispatch => {
  return dispatch({ type: actionTypes.ADD_RESIDENCE_ADDRESS, address })
}

export const addAddress = (address) => dispatch => {
  return dispatch({ type: actionTypes.ADD_ADDRESS, address })
}
