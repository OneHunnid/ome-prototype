import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultState = {
  membership: 'none',
  application: [],
  addresses: [],
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
    id: 7,
    prevName: 'sectionPayment',
    currentName: 'sectionReview',
    nextName: '',
    collapse: true
  },
  section: [
    {
      id: 1,
      prevName: '',
      currentName: 'sectionMembership',
      nextName: 'sectionGeneral',
      collapse: false
    },
    {
      id: 2,
      prevName: 'sectionMembership',
      currentName: 'sectionGeneral',
      nextName: 'sectionRoyalties',
      collapse: true
    },
    {
      id: 3,
      prevName: 'sectionGeneral',
      currentName: 'sectionRoyalties',
      nextName: 'sectionRequiredDocuments',
      collapse: true
    },
    {
      id: 4,
      prevName: 'sectionRoyalties',
      currentName: 'sectionRequiredDocuments',
      nextName: 'sectionCreateAccount',
      collapse: true
    },
    {
      id: 5,
      prevName: 'sectionRequiredDocuments',
      currentName: 'sectionCreateAccount',
      nextName: 'sectionPayment',
      collapse: true
    },
    {
      id: 6,
      prevName: 'sectionCreateAccount',
      currentName: 'sectionPayment',
      nextName: 'sectionReview',
      collapse: true
    },
    {
      id: 7,
      prevName: 'sectionPayment',
      currentName: 'sectionReview',
      nextName: '',
      collapse: true
    }
  ]
}

export const actionTypes = {
  SET_MEMBERSHIP: 'SET_MEMBERSHIP',
  MOVE_FORWARD: 'MOVE_FORWARD',
  MOVE_BACK: 'MOVE_BACK',
  ADD_MEMBERSHIP_DATA: 'ADD_MEMBERSHIP_DATA',
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
          // console.log('REDUCER ADD_ADDRESS ', action.address)

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
          case actionTypes.ADD_MEMBERSHIP_DATA:
            const obj = action.obj
            console.log('REDUCER: ', obj)

            return Object.assign({}, state, {
              application: {
                'membership': obj.membership,
                ...state.application
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

export const moveForward = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.MOVE_FORWARD, currentSection })
}

export const moveBack = (currentSection) => dispatch => {
  return dispatch({ type: actionTypes.MOVE_BACK, currentSection })
}

export const addMembershipData = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_MEMBERSHIP_DATA, obj })
}

export const addAddress = (address) => dispatch => {
  return dispatch({ type: actionTypes.ADD_ADDRESS, address })
}
