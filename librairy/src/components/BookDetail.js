import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import {detailBookQuery} from './queries/rootQueries'

export class BookDetail extends Component {
    
    
    render() {
        console.log("deta from BookDetail",this.props)
        return (
            <div>
             <h2>hello world</h2>
            </div>
        )
    }
}

export default graphql(detailBookQuery,{
    options:props => {
        return {
            variables:{
                id:props.bookID
            }
        }
    }
}
)(BookDetail)
