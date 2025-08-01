import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../Utility/addToDb';
const BookDetails = () => {
    const{bookId}=useParams();
    const id=parseInt(bookId);
    const data=useLoaderData();
    const book =data.find(book=>book.bookId===id);
    console.log(book);

    const {bookId:currentId,image}=book;

    const handleMarkAsRead=(id)=>{
        /**
         * 1. understand what to save or store  bookId
         * 2. where to store :database
         * 3. array, List, collection
         * 4. check : if the book is already in the readlist
         * 5. If not, then add to the book list
         * 6. If yes, do not add the book   
         * 
         */
        addToStoredReadList(id);
    }

    console.log(data);
    return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
        <img
        src={image} className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-accent btn-outline mr-4">Read</button>
        <button className="btn btn-accent">Wishlist</button>
        </div>
    </div>
    </div>
    );
};

export default BookDetails;