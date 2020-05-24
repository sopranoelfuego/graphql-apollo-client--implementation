import {gql} from 'apollo-boost'


const getBooks=gql`
   {
       books{

           name
           genre
           id
       }
   }
`
const getAuthors=gql`

  {
      authors{
          name
          age
          id
      }
  }
`
const addBook=gql`
  mutation($name:String!,$genre:String!,$authorID:ID!){
      addBook( name:$name,genre:$genre,authorID:$authorID){
         name
         genre
      }
  }
`
const detailBookQuery=gql`


   query($id:ID!){
       book(id:$id){
           name
           genre
           id
           author{
               name
                age
                id
                books{
                    name
                    genre
                    id
                }
           }
       }
   }
`
export {getBooks,getAuthors,addBook,detailBookQuery}