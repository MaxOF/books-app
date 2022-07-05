import {getBooks, setBooks, setLoader, setNewBooks, setTotalResults} from "./booksReducer";
import {booksAPI} from "../../api/api";
import {appErrorHandling} from "../../app/appReducer";

jest.mock("../../api/api")

const booksAPIMock = booksAPI

const result = {
    items: [],
    kind: "",
    totalItems: 200
}
jest.fn().mockImplementation(() => Promise.resolve(result));

test('', async () => {
    const thunk = getBooks({
        subject: 'history',
        startIndex: 0,
        title: 'Js',
        sorting: 'newest'
    })

    const dispatchMock = jest.fn()
    //@ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(4)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setLoader(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setTotalResults(result.totalItems))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, setBooks(result.items))
    expect(dispatchMock).toHaveBeenNthCalledWith(4, setLoader(false))
})