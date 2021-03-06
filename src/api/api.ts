import axios from "axios";
import {BookType} from "../features/books/booksReducer";

const apiKey = 'AIzaSyCOzY6ceUuAsddaIr6nyvniglEHyYGB0Ag'

const instance = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/`
})

export const booksAPI = {
    fetchBooks(values: ValuesType){
        if(values.subject === 'all'){
            return instance.get<ResponseAPIType>(`volumes?key=${apiKey}&q=intitle:${values.title}&maxResults=30&orderBy=${values.sorting}&startIndex=${values.startIndex}`)
        } else {
            return instance.get<ResponseAPIType>(`volumes?key=${apiKey}&q=intitle:${values.title}+subject:${values.subject}&maxResults=30&orderBy=${values.sorting}&startIndex=${values.startIndex}`)
        }
    }
}

export type ValuesType = {
    subject: string
    sorting: string
    title: string
    startIndex?: number
}
export type ResponseAPIType = {
    items: BookType[]
    kind: string
    totalItems: number
}
