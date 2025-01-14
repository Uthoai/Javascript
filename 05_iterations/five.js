
const codingLanguage = ["js","c++","c#","java","kotlin"]

// codingLanguage.forEach((item)=>{
//     console.log(item);
// })


const myNums = [1,2,3,4,5,6,,7,8,9,10]
// const newNums = myNums.filter((item)=> item > 4 )
// console.log(newNums);       // [ 5, 6, 7, 8, 9, 10 ]


// const newNums = myNums.filter((item)=> {        // when using scope you need to add return
//     return item > 4
// } )
// console.log(newNums);       // [ 5, 6, 7, 8, 9, 10 ]


// const newNums = []
// myNums.forEach((num)=> {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// In using filter you need to add condition...



const books = [
    {
        title: "To Kill a Mockingbird",
        edition: 2010,
        genre: "Fiction",
        publish: 1960
    },
    {
        title: "1984",
        edition: 2003,
        genre: "Dystopian",
        publish: 1949
    },
    {
        title: "Pride and Prejudice",
        edition: 1998,
        genre: "Romance",
        publish: 1813
    },
    {
        title: "The Great Gatsby",
        edition: 2004,
        genre: "Classic",
        publish: 1925
    },
    {
        title: "Moby Dick",
        edition: 2001,
        genre: "Adventure",
        publish: 1851
    },
    {
        title: "The Catcher in the Rye",
        edition: 2013,
        genre: "Fiction",
        publish: 1951
    },
    {
        title: "The Hobbit",
        edition: 2012,
        genre: "Fantasy",
        publish: 1937
    },
    {
        title: "War and Peace",
        edition: 1995,
        genre: "Fiction",
        publish: 1869
    },
    {
        title: "The Odyssey",
        edition: 1999,
        genre: "Epic",
        publish: -800
    }
];


const userBooks = books.filter((book)=> book.publish >= 1950)
// console.log(userBooks);




