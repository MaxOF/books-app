import {booksReducer, InitialStateType, setBooks, setNewBooks, setTotalResults} from "./booksReducer";

let state: InitialStateType

beforeEach(() => {
    state = {
        books: [
            {
                kind: "",
                id: "Y-mUDwAAQBAJ",
                etag: "gEPdgSE5ZEY",
                selfLink: "https://www.googleapis.com/books/v1/volumes/Y-mUDwAAQBAJ",
                volumeInfo: {
                    title: "Programming TypeScript",
                    subtitle: "Making Your JavaScript Applications Scale",
                    authors: [
                        "Boris Cherny"
                    ],
                    publisher: "O'Reilly Media",
                    publishedDate: "2019-04-25",
                    description: "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system. If you’re a programmer with intermediate JavaScript experience, author Boris Cherny will teach you how to master the TypeScript language. You’ll understand how TypeScript can help you eliminate bugs in your code and enable you to scale your code across more engineers than you could before. In this book, you’ll: Start with the basics: Learn about TypeScript’s different types and type operators, including what they’re for and how they’re used Explore advanced topics: Understand TypeScript’s sophisticated type system, including how to safely handle errors and build asynchronous programs Dive in hands-on: Use TypeScript with your favorite frontend and backend frameworks, migrate your existing JavaScript project to TypeScript, and run your TypeScript application in production",
                    industryIdentifiers: [
                        {
                            type: "ISBN_13",
                            identifier: "9781492037620"
                        },
                        {
                            type: "ISBN_10",
                            identifier: "1492037621"
                        }
                    ],
                    readingModes: {
                        text: false,
                        image: true
                    },
                    pageCount: 322,
                    printType: "BOOK",
                    categories: [
                        "Computers"
                    ],
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "0.2.0.0.preview.1",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false
                    },
                    imageLinks: {
                        smallThumbnail: "http://books.google.com/books/content?id=Y-mUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        thumbnail: "http://books.google.com/books/content?id=Y-mUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    language: "en",
                    previewLink: "http://books.google.ru/books?id=Y-mUDwAAQBAJ&printsec=frontcover&dq=intitle:typescript&hl=&cd=3&source=gbs_api",
                    infoLink: "http://books.google.ru/books?id=Y-mUDwAAQBAJ&dq=intitle:typescript&hl=&source=gbs_api",
                    canonicalVolumeLink: "https://books.google.com/books/about/Programming_TypeScript.html?hl=&id=Y-mUDwAAQBAJ"
                },
                saleInfo: {
                    country: "RU",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false
                },
                accessInfo: {
                    country: "RU",
                    viewability: "PARTIAL",
                    embeddable: true,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        "isAvailable": false
                    },
                    pdf: {
                        "isAvailable": false
                    },
                    webReaderLink: "http://play.google.com/books/reader?id=Y-mUDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "SAMPLE",
                    quoteSharingAllowed: false
                },
                searchInfo: {
                    "textSnippet": "In this book, you’ll: Start with the basics: Learn about TypeScript’s different types and type operators, including what they’re for and how they’re used Explore advanced topics: Understand TypeScript’s sophisticated type system, ..."
                }
            },
            {
                kind: "",
                id: "Y-mUDwAdsfAQBAJ",
                etag: "gEPdgSE5ZEY",
                selfLink: "https://www.googleapis.com/books/v1/volumes/Y-mUDwAAQBAJ",
                volumeInfo: {
                    title: "TypeScript",
                    subtitle: "Making Your JavaScript Applications Scale",
                    authors: [
                        "Max"
                    ],
                    publisher: "O'Reilly Media",
                    publishedDate: "2019-04-25",
                    description: "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system. If you’re a programmer with intermediate JavaScript experience, author Boris Cherny will teach you how to master the TypeScript language. You’ll understand how TypeScript can help you eliminate bugs in your code and enable you to scale your code across more engineers than you could before. In this book, you’ll: Start with the basics: Learn about TypeScript’s different types and type operators, including what they’re for and how they’re used Explore advanced topics: Understand TypeScript’s sophisticated type system, including how to safely handle errors and build asynchronous programs Dive in hands-on: Use TypeScript with your favorite frontend and backend frameworks, migrate your existing JavaScript project to TypeScript, and run your TypeScript application in production",
                    industryIdentifiers: [
                        {
                            type: "ISBN_13",
                            identifier: "9781492037620"
                        },
                        {
                            type: "ISBN_10",
                            identifier: "1492037621"
                        }
                    ],
                    readingModes: {
                        text: false,
                        image: true
                    },
                    pageCount: 322,
                    printType: "BOOK",
                    categories: [
                        "Computers"
                    ],
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "0.2.0.0.preview.1",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false
                    },
                    imageLinks: {
                        smallThumbnail: "http://books.google.com/books/content?id=Y-mUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        thumbnail: "http://books.google.com/books/content?id=Y-mUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    language: "en",
                    previewLink: "http://books.google.ru/books?id=Y-mUDwAAQBAJ&printsec=frontcover&dq=intitle:typescript&hl=&cd=3&source=gbs_api",
                    infoLink: "http://books.google.ru/books?id=Y-mUDwAAQBAJ&dq=intitle:typescript&hl=&source=gbs_api",
                    canonicalVolumeLink: "https://books.google.com/books/about/Programming_TypeScript.html?hl=&id=Y-mUDwAAQBAJ"
                },
                saleInfo: {
                    country: "RU",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false
                },
                accessInfo: {
                    country: "RU",
                    viewability: "PARTIAL",
                    embeddable: true,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        "isAvailable": false
                    },
                    pdf: {
                        "isAvailable": false
                    },
                    webReaderLink: "http://play.google.com/books/reader?id=Y-mUDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "SAMPLE",
                    quoteSharingAllowed: false
                },
                searchInfo: {
                    "textSnippet": "In this book, you’ll: Start with the basics: Learn about TypeScript’s different types and type operators, including what they’re for and how they’re used Explore advanced topics: Understand TypeScript’s sophisticated type system, ..."
                }
            }
        ],
        totalResults: 2,
        success: false
    }
})


describe('fetch some books', () => {
    test('should return an array of books', () => {
        const newState = booksReducer(state, setBooks(state.books))
        expect(newState.books[0].volumeInfo.title).toBe("Programming TypeScript")
        expect(newState.books.length).toBe(2)
    })
    test('should return an array of books in the end', () => {
        const newState = booksReducer(state, setNewBooks(state.books))
        expect(newState.books[2].volumeInfo.title).toBe("Programming TypeScript")
        expect(newState.books.length).toBe(4)
    })
    test('should return a total items of array', () => {
        const newState = booksReducer(state, setTotalResults(state.totalResults))
        expect(newState.totalResults).toBe(2)
    })
})