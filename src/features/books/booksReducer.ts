import {Dispatch} from "redux";
import {booksAPI, ValuesType} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReducerType} from "../../app/store";
import {appErrorHandling, AppErrorHandlingType} from "../../app/appReducer";

export type InitialStateType = {
    books: any
}

const initialState: InitialStateType = {
    books: []
}


export const booksReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'BOOKS/SET-BOOKS':
            return {...state, books: action.books}
        default:
            return state
    }
}

export type ActionsType = SetBooksType


export type SetBooksType = ReturnType<typeof setBooks>

export const setBooks = (books: any) => ({type: 'BOOKS/SET-BOOKS', books} as const)

export type DispatchThunkBooks = ActionsType | AppErrorHandlingType
type ThunkType = ThunkAction<Promise<void>, RootReducerType, unknown, DispatchThunkBooks>

export const getBooks = (values: ValuesType): ThunkType => (dispatch: Dispatch) => {
    return booksAPI.fetchBooks(values)
        .then(res => {
            console.log(res.data)
            dispatch(setBooks(res.data.items))
        })
        .catch(e => {
            dispatch(appErrorHandling(e))
        })
}

