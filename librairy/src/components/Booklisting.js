import React, { Component } from 'react'

import {graphql} from 'react-apollo'
import Book from './Book'
import {Link} from 'react-router-dom'
import {getBooks} from './queries/rootQueries'
 import BookDetailed, { BookDetail } from './BookDetail'


export class Booklisting extends Component {
   
 constructor(props) {
     super(props)
 
     this.state = {
          bookID:""
     }
 }

    displayBooks(){

        var data=this.props.data
        if(data.loading){
            return <h2>loading...</h2>
        
        }
        else {
              return data.books.map(book =>{
                    return (
                          <tr key={book.id} style={{border:'black'}} onClick={e=>{
                              this.setState({bookID:book.id});
                              console.log("BookListing bookID",this.state.bookID)
                            }
                              
                              }>
                                <td>
                                    {book.name}
                                </td>
                                <td>
                                    {book.genre}
                                </td>
                            </tr>
                    )
                     })
        }
    }
    render() {
        
        return (
            <div className="container align-item-center">
                <div className="row mt-5">
                    <div className="col-6 mx-auto">
                        
                            <table style={{width:'80%',border:"1px solid black"}}>
                                <tr style={{border:'black',background:"grey"}}>
                                    <th >
                                        name
                                    </th>
                                    <th>
                                        genre

                                    </th>
                                </tr>
                            
                                     {this.displayBooks()}
                                
                            </table>
                            <Link  to="/Addbook">
                               <div className="btn btn-block btn-primary" style={{width:"80%"}}>
                                    Addbook
                                </div>
                              </Link>
                    <BookDetail bookID={this.state.bookID}/>
                    </div>
                   
                </div>
                

                </div>
                
                
            
        )
    }
}

export default graphql(getBooks)(Booklisting)





