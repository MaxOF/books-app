import React from 'react';
import s from './Book.module.scss'
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app/store";



export const Book = () => {

    const params = useParams<'id'>()
    const id = params.id
    const {books} = useAppSelector(state => state.books)
    if (id) {
        let imageLink = books[id].volumeInfo.imageLinks && books[id].volumeInfo.imageLinks.thumbnail
        return (
            <div className={s.page__book}>
                <div className={s.book__block}>
                    <div className={s.book__imgBlock}>
                        <img src={imageLink} alt="book"/>
                    </div>
                    <div className={s.book__body}>
                        <div className={s.book__category}>
                            {books[id].volumeInfo.categories}
                        </div>
                        <div className={s.book__title}>
                            {books[id].volumeInfo.title}
                        </div>
                        <div className={s.book__author}>
                            {books[id].volumeInfo.author}
                        </div>
                        <div className={s.book__description}>
                            {books[id].volumeInfo.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>
    }


};