const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(2);
// book;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
// console.log(primaryGenre, secondaryGenre);
// console.log(otherGenre);

// const newGenres = [...genres, "epic fantasy"];

// const updatedBook = {
//   ...book,
//   // Adding a new Property
//   moviePublicationDate: "2001-02-12",

//   // updating a property.
//   pages: 1210,
// };

// let pagesRange = pages > 1000 ? "over thousand" : "less than thousand";

// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

// function getTotalReviewCount(book) {
//   const goodReads = book.reviews.goodreads.reviewsCount;
//   const libraryThing = book.reviews.librarything?.reviewsCount;
//   return goodReads + libraryThing;
// }

// console.log(getTotalReviewCount(book));

const books = getBooks();

const title = books.map((book) => book.title);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

// console.log(essentialData);

const logBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
// console.log(logBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J. K. Rowling",
};

const bookAfterAdd = [...books, newBook];

bookAfterAdd;

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

const booksAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 121 } : book
);

booksAfterUpdate;

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((res) => {
//     res.map((todo) => console.log(todo.title));
//   })
//   .catch((err) => console.log(err));

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await response.json();
  todos.map((todo) => console.log(todo.title));
}

fetchTodos();
