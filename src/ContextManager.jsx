import { createContext, useReducer, useContext } from "react"

const initialState = {
    isUserLoggedIn: false,
    user: {
        email: "",
        displayName: ""
    }
}

const StateContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            console.log("user is logged in.")
            return {...state,
                    isUserLoggedIn: true,
                    user: {...state.user, ...action.user }
            }
        case "LOGGED_OUT":
            console.log("user is logged out.")
            return { ...state, isUserLoggedIn: false }
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