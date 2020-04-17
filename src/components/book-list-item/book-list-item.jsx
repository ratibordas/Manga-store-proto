import React from 'react'
import  './book-list-item.scss'


const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
       
           <div className="d-flex justify-content-center">
            <div className="book-cover w-50">
                <img src={coverImage} className="img-fluid" alt="example"/>
           </div>
           <div className="book-info w-50 ml-3">
                 <p> {title}</p>
                <div className="">{author}</div> 
                <div className="">${price}</div>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-secondary btn-md mt-3 mr-1 add-to-cart">Add to cart</button>
           </div>
         </div>
            

           
      
     
    )
}

export default BookListItem;