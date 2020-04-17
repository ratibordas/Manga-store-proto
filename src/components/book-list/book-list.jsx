import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import "./book-list.scss"
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { compose } from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import {bindActionCreators} from 'redux'

const BookList = ({books, onAddedToCart}) => {
 return (
     
     
     <div className="row justify-content-center">
                {
                    books.map((book) => {
                        return (
    <div key={book.id} className="col-lg-3 mt-3" ><BookListItem onAddedToCart={()=> onAddedToCart(book.id)}  book={book}/></div>
                        )
                    })
                }
            </div>
        )
}





class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}






const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return {
        books,
        loading,
        error
    }
}
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
};

export default compose(withBookstoreService())(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));