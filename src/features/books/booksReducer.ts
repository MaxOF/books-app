import {Dispatch} from "redux";
import {booksAPI, ValuesType} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReducerType} from "../../app/store";
import {appErrorHandling, AppErrorHandlingType} from "../../app/appReducer";

export type InitialStateType = {
    books: any
    totalResults: number
    success: boolean
}

const initialState: InitialStateType = {
    books: [],
    totalResults: 0,
    success: false
}


export const booksReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'BOOKS/SET-BOOKS':
            let uniqueArr = action.books.filter((book: any, index: any) => {
                return action.books.indexOf(book) === index
            })
            return {...state, books: uniqueArr}
        case 'BOOKS/SET-TOTAL-RESULTS':
            return {...state, totalResults: action.value}
        case 'BOOKS/SET-NEW-BOOKS':
            let newUniqueArr = action.books.filter((book: any, index: any) => {
                return action.books.indexOf(book) === index
            })
            return {...state, books: [...state.books, newUniqueArr].flat(1)}
        case 'BOOKS/SET-LOADER':
            return {...state, success: action.success}
        default:
            return state
    }
}

export type ActionsType = SetBooksType | SetTotalResultsType | SetNewBooksType | SetLoaderType


export type SetBooksType = ReturnType<typeof setBooks>
export type SetTotalResultsType = ReturnType<typeof setTotalResults>
export type SetNewBooksType = ReturnType<typeof setNewBooks>
export type SetLoaderType = ReturnType<typeof setLoader>

export const setBooks = (books: any) => ({type: 'BOOKS/SET-BOOKS', books} as const)
export const setNewBooks = (books: any) => ({type: 'BOOKS/SET-NEW-BOOKS', books} as const)
export const setTotalResults = (value: number) => ({type: 'BOOKS/SET-TOTAL-RESULTS', value} as const)
export const setLoader = (success: boolean) => ({type: 'BOOKS/SET-LOADER', success} as const)

export type DispatchThunkBooks = ActionsType | AppErrorHandlingType
type ThunkType = ThunkAction<Promise<void>, RootReducerType, unknown, DispatchThunkBooks>

export const getBooks = (values: ValuesType): ThunkType => (dispatch: Dispatch) => {
    dispatch(setLoader(true))
    return booksAPI.fetchBooks(values)
        .then(res => {
            if(res.data.items === undefined) {
                dispatch(setBooks([]))
            }
            dispatch(setTotalResults(res.data.totalItems))
            dispatch(setBooks(res.data.items))
        })
        .catch(e => {
            dispatch(appErrorHandling(e.message))
        })
        .finally(() => {
            dispatch(setLoader(false))
        })
}
export const fetchMoreBooks = (values: ValuesType): ThunkType => (dispatch: Dispatch) => {
    dispatch(setLoader(true))
    return booksAPI.fetchBooks(values)
        .then(res => {
            dispatch(setNewBooks(res.data.items))
        })
        .catch(e => {
            dispatch(appErrorHandling(e.message))
        })
        .finally(() => {
            dispatch(setLoader(false))
        })
}

