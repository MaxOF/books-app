import React from 'react';
import './App.css';
import s from './Main.module.scss'

function App() {

    const optionArr: string[] = ['all', 'art', 'biography', 'computers', 'history', ' medical', 'poetry']

    return (
        <div className="App">
            <main className={s.page}>
                <section className={s.page__search}>
                    <div className={`${s.search__container} _container`}>
                        <div className={s.search__body}>
                            <h1 className={s.search__title}>Search for books</h1>
                            <form className={s.search__form}>
                                <div className={s.searchBlock__input}>
                                    <input type="text"/>
                                </div>
                                <div className={s.select__category}>
                                    <select name="categories" id="" defaultValue='all'>
                                        {
                                            optionArr.map(opt => {
                                                return <option value={opt}>{opt}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className={s.select__sort}>
                                    <select name="sorting" id="" defaultValue='relevance'>
                                        <option value='relevance'>relevance</option>
                                        <option value='newest'>newest</option>
                                    </select>
                                </div>
                                <div className={s.search__button}>
                                    <button>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div className={s.page__results}>
                    <div>
                        search results
                    </div>

                </div>
            </main>

        </div>
    );
}

export default App;
