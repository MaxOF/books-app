import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {booksReducer} from "../features/books/booksReducer";


const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector