import React from 'react';
import {useParams} from "react-router-dom";

import {useAppSelector} from "../../app/store";

import s from './Book.module.scss'

export const Book = () => {

    const params = useParams<'id'>()
    const id = params.id
    const {books} = useAppSelector(state => state.books)
    const filteredBook = books.filter(book => {
        return book.id === id
    })

    if (id) {
        let imageLink = filteredBook[0].volumeInfo.imageLinks && filteredBook[0].volumeInfo.imageLinks.thumbnail
        return (
            <div className={s.page__book}>
                <div className={s.book__block}>
                    <div className={s.book__imgBlock}>
                        <img src={imageLink} alt="book"/>
                    </div>
                    <div className={s.book__body}>
                        <div className={s.book__category}>
                            {filteredBook[0].volumeInfo.categories}
                        </div>
                        <div className={s.book__title}>
                            {filteredBook[0].volumeInfo.title}
                        </div>
                        <div className={s.book__author}>
                            {filteredBook[0].volumeInfo.authors}
                        </div>
                        <div className={s.book__description}>
                            {filteredBook[0].volumeInfo.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>
    }


};