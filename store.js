import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultState = {
  membership: 'none',
  application: {
    generalObj: {
      completed: false
    },
    royaltiesObj: {
      completed: false
    },
    requiredDocumentsObj: {
      completed: false
    },
    createAccountObj: {
      completed: false
    },
    paymentObj: {
      completed: false
    }
  },
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
  ADD_GENERAL_DATA: 'ADD_GENERAL_DATA',
  ADD_ROYALTIES_DATA: 'ADD_ROYALTIES_DATA',
  ADD_REQUIRED_DOCUMENTS_DATA: 'ADD_REQUIRED_DOCUMENTS_DATA',
  ADD_CREATE_ACCOUNT_DATA: 'ADD_CREATE_ACCOUNT_DATA',
  ADD_PAYMENT_DATA: 'ADD_PAYMENT_DATA',
  ADD_ADDRESS: 'ADD_ADDRESS',
  ADD_PRO_ANSWER: 'ADD_PRO_ANSWER'
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

            return Object.assign({}, state, {
              application: {
                'membership': obj.membership,
                ...state.application
              }
            })
          case actionTypes.ADD_GENERAL_DATA:
            const generalObj = action.obj
            // console.log('GENERAL REDUCER: ', generalObj)

            return Object.assign({}, state, {
              application: {
                ...state.application,
                generalObj
              }
            })
          case actionTypes.ADD_ROYALTIES_DATA:
            const royaltiesObj = action.obj
            // console.log('ROYALTIES REDUCER: ', royaltiesObj)

            return Object.assign({}, state, {
              application: {
                ...state.application,
                royaltiesObj
              }
            })
          case actionTypes.ADD_REQUIRED_DOCUMENTS_DATA:
            const requiredDocumentsObj = action.obj
            // console.log('REQUIRED DOCUMENTS REDUCER: ', requiredDocumentsObj)

            return Object.assign({}, state, {
              application: {
                ...state.application,
                requiredDocumentsObj
              }
            })
          case actionTypes.ADD_CREATE_ACCOUNT_DATA:
            const createAccountObj = action.obj
            // console.log('CREATE ACCOUNT REDUCER: ', createAccountObj)

            return Object.assign({}, state, {
              application: {
                ...state.application,
                createAccountObj
              }
            })
          case actionTypes.ADD_PAYMENT_DATA:
            const paymentObj = action.obj
            // console.log('CREATE ACCOUNT REDUCER: ', paymentObj)

            return Object.assign({}, state, {
              application: {
                ...state.application,
                paymentObj
              }
            })
          case actionTypes.ADD_PRO_ANSWER:
            const proAnswerObj = action.obj
            // console.log('PRO ANSWER REDUCER: ', proAnswerObj.proQuestion)
            const answer = proAnswerObj.proQuestion

            return Object.assign({}, state, {
              application: {
                ...state.application,
                'proQuestion': answer
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

export const addGeneralData = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_GENERAL_DATA, obj })
}

export const addRoyaltiesData = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_ROYALTIES_DATA, obj })
}

export const addRequiredDocumentsData = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_REQUIRED_DOCUMENTS_DATA, obj })
}

export const addCreateAccountData = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_CREATE_ACCOUNT_DATA, obj })
}

export const addPaymentData = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_PAYMENT_DATA, obj })
}

export const addProAnswer = (obj) => dispatch => {
  return dispatch({ type: actionTypes.ADD_PRO_ANSWER, obj })
}

export const addAddress = (address) => dispatch => {
  return dispatch({ type: actionTypes.ADD_ADDRESS, address })
}
