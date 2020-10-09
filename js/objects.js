(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: 'Correy',
    //     lastName: 'Everett'
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


        // person.sayHello = function(){
        //     return ('Hello ' + this.firstName + ' ' + this.lastName);
        // }
        //
        // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        if(shopper.amount > 200){
            var discount = shopper.amount * .12;
            var newTotal = shopper.amount - discount;
            console.log(shopper.name);
            console.log('Original Total: $' + (shopper.amount).toFixed(2));
            console.log('Discount: $' + (discount).toFixed(2));
            console.log('New Total: $' + (newTotal).toFixed(2));
        } else {
            console.log(shopper.name);
            console.log('Original Total: $' + (shopper.amount).toFixed(2));
            console.log('Sorry, you do not qualify for a discount today!');
        }
        console.log('***********************************************')
    });





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: 'The Da Vinci Code',
            author: {
                firstName: 'Dan',
                lastName: 'Brown'
            }
        },
        {
            title: 'Harry Potter and the Deathly Hallows',
            author: {
                firstName: 'J.K.',
                lastName: 'Rowling'
            }
        },
        {
            title: 'Harry Potter and the Philosopher\'s Stone',
            author: {
                firstName: 'J.K.',
                lastName: 'Rowling'
            }
        },
        {
            title: 'Harry Potter and the Order of the Phoenix',
            author: {
                firstName: 'J.K.',
                lastName: 'Rowling'
            }
        },
        {
            title: 'Fifty Shades of Grey',
            author: {
                firstName: 'E.L.',
                lastName: 'James'
            }
        },

    ];

    console.log(books[1].title)
    console.log(books[1].author.firstName)
    console.log(books[1].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    // for(var i = 0; i < books.length; i++){
    //     console.log('====================');
    //     console.log('Book # ' + [i]);
    //     console.log('Title: ' + books[i].title);
    //     console.log('Author: ' + books[i].author.firstName + books[i].author.lastName);
    //     console.log('====================');
    // }

    books.forEach(function(book, index){
        console.log('====================');
        console.log('Book # ' + (index + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
        console.log('====================');
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    books.createBook = function(){
        var newBook = {
            title: prompt('Please enter the title of the book.'),
            author: {
                firstName: prompt('Please enter the First Name of the Author.'),
                lastName: prompt('Please enter the Last Name of the Author.')
            }
        };
        books.push(newBook);
    }
    console.log(books.createBook());

})();

// person.sayHello = function(){
//     return ('Hello ' + this.firstName + ' ' + this.lastName);
// }
//
// console.log(person.sayHello());