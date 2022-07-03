import React from 'react';
import s from './Book.module.scss'

export const Book = () => {
    return (
        <div className={s.page__book}>
            <div className={s.book__block}>
                <div className={s.book__imgBlock}>
                    <img src="" alt=""/>
                </div>
                <div className={s.book__body}>
                    <div className={s.book__category}>
                        Category
                    </div>
                    <div className={s.book__title}>
                        Name
                    </div>
                    <div className={s.book__author}>
                        Author
                    </div>
                    <div className={s.book__description}>
                        description
                    </div>
                </div>
            </div>
        </div>
    );
};