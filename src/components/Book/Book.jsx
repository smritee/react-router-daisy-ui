
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,author,image,review,rating,category,tags,publisher,yearOfPublishing}=book;
    return (
        
        
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                
                <Link to={`/books/${bookId}`}>                
                    <figure className="bg-blue-200 py-8 rounded-2xl ">
                        <img src={image} alt={bookName} className="h-[166px]"/>
                    </figure>
                    
                    
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            {
                                tags.map((tag,index)=><button key={index} className="btn btn-soft btn-success text-green-500">{tag}</button>)
                            }
                        
                        </div>        
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By &nbsp;:&nbsp;{author} </p>
                        <div className="border-t-2 border-dashed"></div>
                        <div className="card-actions justify-between">
                            <div className="badge ">{category}</div>                    
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>                        
                            
                        </div>
                    </div>
                </Link>
            </div>
        
    );
};

export default Book;