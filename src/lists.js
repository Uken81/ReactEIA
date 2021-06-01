import React, { useState } from 'react';



const BookList = () => {
    const [books] = useState([
        {title: 'List1', 
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum modi tempora reprehenderit inventore debitis esse aut facilis, numquam sint libero asperiores perferendis minima magni saepe quam aspernatur! Ullam, dicta animi.', 
        author: 'Manguy',
        id: 1},
        {title: 'List2',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum modi tempora reprehenderit inventore debitis esse aut facilis, numquam sint libero asperiores perferendis minima magni saepe quam aspernatur! Ullam, dicta animi.',
        author: 'Guyman',
        id: 2},
        {title: 'List3',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum modi tempora reprehenderit inventore debitis esse aut facilis, numquam sint libero asperiores perferendis minima magni saepe quam aspernatur! Ullam, dicta animi.',
        author: 'Guyman',
        id: 3}
      ])
    return (
        <div className="book-list">
            {books.map((book) => (
                <div className="book-preview" id={book.title} key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.text}</p>
                    <a href='#'>{book.author}</a>
                </div>
            ))}
        </div>
    );
}

export default BookList;

