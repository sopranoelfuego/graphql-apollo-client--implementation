const graphql= require('graphql')

const Book=require("../models/book")
const Author=require("../models/author")
//here we have to import from graphql needed samples
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLNonNull, GraphQLInt,GraphQLList}=graphql

//then here we create types references to the schema of data on database

const bookType= new GraphQLObjectType({
   name:"book",
   fields:()=>({
       id:{type:GraphQLID},
       name:{type:GraphQLString},
       genre:{type:GraphQLString},
       author:{
        type:authorType,
        resolve(parent,args){
            // _.find(authors,{id:parent.authorID})
            return Author.findById(parent.authorID)
        }
    }
   })

})

const authorType= new GraphQLObjectType({
    name:"author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(bookType),
            resolve(parent,args){
                return Book.find({authorID:parent.id})
            }
        }
        
    })

})

const rootQuery= new GraphQLObjectType({

    name:'rootQueryType',
    fields:{
         book:{
            type:bookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                   return Book.findById(args.id)
            }  
    
    
         },
         author :{
             type:authorType,
             args:{id:{type:GraphQLID}},
             resolve(parent,args){
                    return Author.findById(args.id)
             }

         },
         books:{
             type:new GraphQLList(bookType),
             resolve(parent,args){
                 return Book.find({})
             }
             
         },
         authors:{
             type:new GraphQLList(authorType),
             resolve(parent,args){
                 return Author.find({})
             }
         }

    }
})


const Mutation=new GraphQLObjectType({
   name:"Mutation",
   fields:{
       
        addAuthor :{
            type:authorType,
             args:{
                 name:{type:new GraphQLNonNull( GraphQLString)},
                 age:{type:new GraphQLNonNull(GraphQLInt) }
             },
             resolve(parent,args){
                    let newAuthor=new Author({
                        name:args.name,
                        age:args.age
                    })
                    return newAuthor.save()
             }

        },
        addBook:{
            type:bookType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)  },
                genre:{type:new GraphQLNonNull(GraphQLString)},
                authorID:{type:new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                    let newBook=new Book({
                        name:args.name,
                        genre:args.genre,
                        authorID:args.authorID
                    })
                   return newBook.save()
            }
        }
   }





})

module.exports= new GraphQLSchema({
    query:rootQuery,
    mutation:Mutation
})