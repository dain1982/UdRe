'use strict';

const deadline = '05/01/2025';

// book name: pages count
const books = {
    'italiano di base': 230,
    'facile facile A1': 90,
    'facile facile A2': 80,
};

const pagesTotal = Object.values(books).reduce( (pagesTotal,pagesBook) => pagesTotal + pagesBook );
const daysLeft = Math.floor( (new Date(deadline) - new Date()) / (60*60*24*1000) );

console.log(`До ${deadline} желательно решать не менее ${Math.ceil(pagesTotal/daysLeft)} страниц в день`);