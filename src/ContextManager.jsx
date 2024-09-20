import { createContext, useReducer, useContext } from "react"

const initialState = {
    isUserLoggedIn: false,
    user: {
        email: "",
        displayName: "",
        pets: []
    },
    pets: []
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