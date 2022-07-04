import React from 'react';
import s from './Error.module.scss'
import {RootReducerType, useAppSelector} from "../app/store";
import {appErrorHandling} from "../app/appReducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {DispatchThunkBooks} from "../features/books/booksReducer";

export const ErrorHandler = () => {

    const {error} = useAppSelector(state => state.app)
    const dispatch = useDispatch<ThunkDispatch<RootReducerType, unknown, DispatchThunkBooks>>()

    setTimeout(() => {
        dispatch(appErrorHandling(null))
    }, 4000)

    return (
        <div className={s.alert}>
            <span>{error}.</span>
        </div>
    );
};
