import React, { Component } from 'react'



export class Author extends Component {
    render() {
        const{name,age,id}=this.props.author
        // console.log("here i display data from Book",this.props)
        return (
            <div className="col-4">
                <li className="list-group-item d-flex justify-content-between" key={id}>
                    
                            <div className="col-4 mx-auto alig-self-center">
                                {name}
                                
                            </div>
                            <div className="col-4 mx-auto">
                                {age}
                                
                            </div>
                
                </li>
            </div>
        )
    }
}

export default Author
