import { createContext, useReducer, useContext } from "react"

const initialState = {
    isUserLoggedIn: false,
    user: {
        email: "",
        displayName: ""
    },
    adminLoggedIn: false,
    pets: [],
    unConfirmedPets: [],
    inquiries: [],
    appointments: []
}

const StateContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {...state,
                    isUserLoggedIn: true,
                    user: {...state.user, ...action.user }
            }
        case "LOGGED_OUT":
            return { ...state, isUserLoggedIn: false }
        case "FETCH_PET_DATA":
            return {
                ...state,
                pets: [
                    ...state.pets,
                    {...action.pet}
                ]
            }
        case "FETCH_INQUIRIES":
            return {
                ...state,
                inquiries: [
                    ...state.inquiries,
                    { ...action.inquiry }
                ]
            }

        case "ADD_APPOINTMENT":
            return {
                ...state,
                appointment: [
                    ...state.appointments,
                    { ...action.appointment }
                ]
            }

        case "FETCH_APPOINTMENTS":
            return {
                ...state,
                appointments: [
                    ...state.appointments,
                    { ...action.appointment }
                ]
            }
        case "ADMIN_LOGGED_IN":
            return {
                ...state,
                adminLoggedIn: true
            }

        case "REMOVE_PET":
            const pets = state.pets.filter(item => item.id !== action.id)

            return {
                ...state,
                pets: pets
            }

        default:
            return state
    }
}

export function ContextProvider(props) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            { props.children }
        </StateContext.Provider>
    )
}

export function useStateValue() {
    return useContext(StateContext)
}