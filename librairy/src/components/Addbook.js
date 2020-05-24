import React, { Component } from 'react'
import {flowRight as compose}  from 'lodash'
import {graphql} from 'react-apollo'
import {getAuthors,addBook, getBooks} from './queries/rootQueries' 
import {Link} from 'react-router-dom'





export class Addbook extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             genre:'',
             authorID:''
        }
    }


    onSubmitMethod=(e)=>{
        e.preventDefault() 
        console.log("output on onsubmit methode",this.state)
        this.props.addBook({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                authorID:this.state.authorID
            },
                refetchQuerie:[{query:getBooks}]

        })


    }
    displayAuthors=()=>{
        const data=this.props.getAuthors
    console.log(this.props)
        if(data.loading){
            return <h3>data are fecthing....</h3>
        }else
         return data.authors.map(author => {
         return <option key={author.id} value={author.id}>{author.name}</option>
         })
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-5 ml-5 mr-1">
                    <div className="col-6 col-lg-4 mx-auto">
                    <form className="form-control" onSubmit={this.onSubmitMethod.bind(this)}>
                    <div >
                        <input  type="text" className="form-control" placeholder="name..." onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="genre.." onChange={(e)=>this.setState({genre:e.target.value})}/>
                    </div>
                    <div> 
                        <select  className="form-control">
                            <option>             </option>
                           {this.displayAuthors()}

                        </select>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-block btn-outline-primary mb-5" />
                        <Link to="/">
                        <button className="btn btn-lg btn-success">
                                home
                        </button>

                        </Link>
                    </div>
                </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default compose(
    graphql(getAuthors,{name:"getAuthors"}),
    graphql(addBook,{name:"addBook"})
)(Addbook)
