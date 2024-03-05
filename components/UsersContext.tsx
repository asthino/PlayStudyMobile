import { createContext, useContext, useReducer } from "react";


const UsersContext = createContext<any>({});

const initialState = {
    users: [],
    games: [],
    isLoading: false,
    error: null,
};

const usersReducer = (state: any, action: any) => {
    switch (action?.type) {
        case "USERS_PROCESS_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "USERS_PROCESS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "USERS_FETCH":
            return {
                ...state,
                isLoading: false,
                users: action.payload,
            };
        case "USERS_CLEAR":
            return {
                ...state,
                users: [],
            };
        case "GAMES_PROCESS_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "GAMES_PROCESS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "GAMES_FETCH":
            return {
                ...state,
                isLoading: false,
                games: action.payload,
            };
        case "GAMES_CLEAR":
            return {
                ...state,
                games: [],
            };
        default:
            return state;
    }
}

export const UsersProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
}

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (context === undefined) {
        throw new Error('useUsers must be used within a UsersProvider');
    }
    return context;
}

