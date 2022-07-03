import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import './App.css';
import s from './Main.module.scss'
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {RootReducerType, useAppSelector} from "./app/store";
import {DispatchThunkBooks, fetchMoreBooks, getBooks} from "./features/books/booksReducer";
import {log} from "util";

function App() {

    const optionArr: string[] = ['all', 'art', 'biography', 'computers', 'history', ' medical', 'poetry']
    const dispatch = useDispatch<ThunkDispatch<RootReducerType, unknown, DispatchThunkBooks>>()
    const {books} = useAppSelector(state => state.books)

    const [title, setTitle] = useState<string>('')
    const [sort, setSort] = useState<string>('relevance')
    const [category, setCategory] = useState<string>('all')
    const [index, setIndex] = useState<number>(0)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if (title.trim() !== '') {
            dispatch(getBooks({subject: category, title, sorting: sort, startIndex: index}))
        }
        setTitle('')
    }
    const onLoadMoreHandler = () => {
        setIndex(index + 1)
        dispatch(fetchMoreBooks({subject: category, title, sorting: sort, startIndex: index}))
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
                                    <select onChange={onCategoryChangeHandler} name="categories" id=""
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
                <div className={s.page__totalResult}>
                    <div className={s.totalResult__block}>
                        Total result:
                    </div>
                </div>
                <div className={s.page__results}>
                    <div className={s.page__cards}>
                        {books ? books.map((book: any, index: any) => {
                                let imageLink = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                                if (imageLink !== undefined && book.volumeInfo.categories !== undefined && book.volumeInfo.title !== undefined && book.volumeInfo.authors !== undefined) {
                                    if(book[index] !== book) {}
                                    return (
                                        <div key={index} className={s.cards__card}>
                                            <div className={s.card__container}>
                                                <div className={s.card__imgBlock}>
                                                    <img src={imageLink} alt="bookCover"/>
                                                </div>
                                                <div className={s.card__categoryBlock}>
                                                    {
                                                        book.volumeInfo.categories
                                                    }
                                                </div>
                                                <div className={s.card__titleBlock}>
                                                    {book.volumeInfo.title}
                                                </div>
                                                <div className={s.card__authorBlock}>
                                                    {book.volumeInfo.authors}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            : 'Sorry, we can`t find your favourite book:('}
                    </div>
                </div>

                <div className={s.page__loadMore}>
                    <div className={s.loadMore__block}>
                        <button onClick={onLoadMoreHandler}>Load more</button>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default App;
