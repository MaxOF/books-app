export type InitialStateType = {
    error: string | null
}

const initialState: InitialStateType = {
    error: null
}


export const appReducer = (state = initialState, action: ActionsType) => {
switch (action.type) {
    case 'APP/ERROR-HANDLING':
        return {...state, error: action.err}
    default:
        return state
}
}

export type ActionsType = AppErrorHandlingType


export type AppErrorHandlingType = ReturnType<typeof appErrorHandling>

export const appErrorHandling = (err: string | null) => ({type: 'APP/ERROR-HANDLING', err} as const)