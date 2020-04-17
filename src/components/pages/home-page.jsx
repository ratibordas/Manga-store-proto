import React, {Fragment} from 'react'
import BookList from '../book-list'
import { Link } from 'react-router-dom'


const HomePage = () => {
   
    
    
    
    return (
        <Fragment>
            <h1 className="display-4 text-center">Welcome to the secret shop! </h1>
            <hr/>
              <ul className="pagination ">
    <li className="page-item disabled">
      <Link className="page-link" to="/">&laquo;</Link>
    </li>
    <li className="page-item active">
      <Link className="page-link" to="/">1</Link>
    </li>
    <li className="page-item">
      <Link className="page-link" to="/">2</Link>
    </li>
    <li className="page-item">
      <Link className="page-link" to="/">3</Link>
    </li>
    <li className="page-item">
      <Link className="page-link" to="/">4</Link>
    </li>
    <li className="page-item">
      <Link className="page-link" to="/">5</Link>
    </li>
    <li className="page-item">
      <Link className="page-link" to="/">&raquo;</Link>
    </li>
  </ul>
            <BookList /> 
        <hr/>    
        </Fragment>
        
    );
}



export default HomePage