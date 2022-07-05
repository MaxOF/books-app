import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Routes, Route, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

import {RootReducerType, useAppSelector} from "./app/store";
import {DispatchThunkBooks, fetchMoreBooks, getBooks} from "./features/books/booksReducer";
import {Book} from "./features/book/Book";
import {Books} from "./features/books/Books";
import {appErrorHandling} from "./app/appReducer";
import {Loader} from "./utils/Loader";

import s from './Main.module.scss'
import './App.css';


function App() {


    const optionArr: string[] = ['all', 'art', 'biography', 'computers', 'history', ' medical', 'poetry']

    const dispatch = useDispatch<ThunkDispatch<RootReducerType, unknown, DispatchThunkBooks>>()
    const {success} = useAppSelector(state => state.books)
    const {error} = useAppSelector(state => state.app)

    const [page, setPage] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [sort, setSort] = useState<string>('relevance')
    const [category, setCategory] = useState<string>('all')
    const navigate = useNavigate()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if (title.trim() !== '') {
            navigate('/')
            dispatch(getBooks({subject: category, title, sorting: sort, startIndex: page}))
        }
    }

    const onKeyBoardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }
    const onSortChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSort(e.currentTarget.value)
    }
    const onCategoryChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value)
    }

    const onLoadMoreHandler = () => {
        setPage(page + 1)
        dispatch(fetchMoreBooks({subject: category, title, sorting: sort, startIndex: page}))
    }

    if (error) {
        toast.error(`${error}😕`)
        dispatch(appErrorHandling(null))
    }


    return (
        <div className="App">
            <main className={s.page}>
                <section className={s.page__search}>
                    <div className={`${s.search__container} _container`}>
                        <div className={s.search__body}>
                            <h1 className={s.search__title}>Search for books</h1>
                            <div className={s.search__form}>
                                <div className={s.searchBlock__input}>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={onChangeHandler}
                                        onKeyPress={onKeyBoardHandler}
                                    />
                                </div>
                                <div className={s.select__category}>
                                    <select onChange={onCategoryChangeHandler}
                                            defaultValue='all'>
                                        {
                                            optionArr.map((opt, index) => {
                                                return <option value={opt} key={index}>{opt}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className={s.select__sort}>
                                    <select onChange={onSortChangeHandler} defaultValue='relevance'>
                                        <option value='newest'>newest</option>
                                        <option value='relevance'>relevance</option>
                                    </select>
                                </div>
                                <div className={s.search__button}>
                                    <button onClick={onClickHandler}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {
                    success
                        ? <Loader />
                        :
                        <Routes>
                            <Route path="/" element={<Books onLoadMoreHandler={onLoadMoreHandler}/>}/>
                            <Route path="/book/:id" element={<Book/>}/>
                        </Routes>
                }
            </main>

        </div>
    );
}

export default App;
