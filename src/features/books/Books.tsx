import React from 'react';
import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../app/store";

import s from "./Books.module.scss";

type PropsType = {
    onLoadMoreHandler: () => void
}

export const Books = ({onLoadMoreHandler}:PropsType) => {

    const navigate = useNavigate()
    const {books, totalResults} = useAppSelector(state => state.books)


    return (
        <>
            <div className={s.page__totalResult}>
                <div className={s.totalResult__block}>
                    Total result: {totalResults}
                </div>
            </div>
            <div className={s.page__results}>
                <div className={s.page__cards}>
                    {books.map(book => {
                        let imageLink = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                        const onCardHandler = () => {
                            return navigate(`/book/${book.id}`)
                        }
                        if (imageLink !== undefined
                            && book.volumeInfo.categories !== undefined
                            && book.volumeInfo.title !== undefined
                            && book.volumeInfo.authors !== undefined) {
                            return (
                                <div key={book.id} className={s.cards__card}
                                     onClick={onCardHandler}>
                                    <div className={s.card__container}>
                                        <div className={s.card__imgBlock}>
                                            <img src={imageLink} alt="bookCover"/>
                                        </div>
                                        <div className={s.card__categoryBlock}>
                                            {book.volumeInfo.categories}
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
                    })}
                </div>
            </div>
            {books.length >= 30 ?
                <div className={s.page__loadMore}>
                    <div className={s.loadMore__block}>
                        <button onClick={onLoadMoreHandler}>Load more</button>
                    </div>
                </div> : <></>
            }
        </>
    );
};

