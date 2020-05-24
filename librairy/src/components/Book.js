import React, { Component } from 'react'
import style from 'styled-components'

import {detailBookQuery} from "./queries/rootQueries"

import {graphql} from 'react-apollo'
export class Book extends Component {



   
    render() {
        const{name,genre,id}=this.props.book
        

        console.log("here i display data from Book",this.props)
        return (
            <tr key={id} style={{border:'black'}}>
                <td>
                    {name}
                </td>
                <td>
                    {genre}
                </td>
            </tr>
        )
    }
}

export default Book
