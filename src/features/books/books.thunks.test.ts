import {fetchMoreBooks, getBooks, setBooks, setLoader, setNewBooks, setTotalResults} from "./booksReducer";
import {booksAPI} from "../../api/api";



jest.mock("../../api/api")
const bookAPIMock = booksAPI as jest.Mocked<typeof booksAPI>

const result = {
    status: 200,
    statusText: 'Ok',
    headers: {},
    config: {},
    data: {
        items: [],
        kind: "",
        totalItems: 2,
    }
}

describe('fetch some books', () => {
    test('get books', async () => {
        const thunk = getBooks({
            subject: 'history',
            startIndex: 0,
            title: 'Js',
            sorting: 'newest'
        })

        bookAPIMock.fetchBooks.mockResolvedValue(Promise.resolve(result))
        const dispatchMock = jest.fn()
        const getStateMock = jest.fn()


        await thunk(dispatchMock, getStateMock, {})

        expect(dispatchMock).toBeCalledTimes(4)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setLoader(true))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, setTotalResults(result.data.totalItems))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, setBooks(result.data.items))
        expect(dispatchMock).toHaveBeenNthCalledWith(4, setLoader(false))
    })
    test('fetch books', async () => {
        const thunk = fetchMoreBooks({
            subject: 'history',
            startIndex: 0,
            title: 'Js',
            sorting: 'newest'
        })

        bookAPIMock.fetchBooks.mockResolvedValue(Promise.resolve(result))
        const dispatchMock = jest.fn()
        const getStateMock = jest.fn()

        await thunk(dispatchMock, getStateMock, {})

        expect(dispatchMock).toBeCalledTimes(3)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, setLoader(true))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, setNewBooks(result.data.items))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, setLoader(false))
    })
})

