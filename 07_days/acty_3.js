//**************Task 5 **************** */

const booksLibrary = {
    name : "library name mind",
    books:
    [
        {
        title: "think and grow rich",
    author: "nepoleon hill",
    year: 1988
    },
    {title: "the power of subconcious mind",
        author: "joseph murphy",
        year: 1965}
]
}
// console.log(booksLibrary);

//*****************Task 6 ************* */


// console.log(`library name: ${booksLibrary.name}`);

// booksLibrary.books.forEach(i => {
//     console.log(`book title: ${i.title}`);
    
// })

//***********Task 7 *************** */
const books ={ book: [
 {
    title: "think and grow rich",
    author: "nepoleon hill",
    year: 1988
},
{
    title: "the power of subconcious mind",
    author: "joseph murphy",
    year: 1965
}
]
book.details = function() {
    return ` ${this.book.title} was published in ${this.year} `
}
}
console.log(book.details());

