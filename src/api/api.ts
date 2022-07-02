import axios from "axios";

const apiKey = 'AIzaSyCOzY6ceUuAsddaIr6nyvniglEHyYGB0Ag'

const instance = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&`,
    withCredentials: true
})

const booksAPI = {
    fetchBooks(values: ValuesType){
        if(values.subject === 'all'){
            return instance.get(`q=intitle:${values.title}&maxResults=30&orderBy=${values.sorting}`)
        } else {
            return instance.get(`q=intitle:${values.title}+subject:${values.subject}&maxResults=30&orderBy=${values.sorting}`)
        }
    }
}

export type ValuesType = {
    subject: string
    sorting: string
    title: string
}