const schema=require("./schema/schema")
const mongoose=require("mongoose")
const express=require("express")
const graphqlHttp=require("express-graphql")
const app=express()
const cors=require("cors")

app.use(cors())//here we allow rquest from other serve (cross-origin)

// mongoose.connect("mongodb+srv://soprano:aubinjaja@cluster0-48opu.mongodb.net/test?retryWrites=true&w=majority")
const bridge="mongodb+srv://soprano:aubinjaja@cluster0-48opu.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect('mongodb://localhost/bookStore',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
  
mongoose.connection.on('connected',()=>{
    console.log("connected")
})
app.use('/graphql',graphqlHttp({
  schema,
  graphiql:true
}))

app.listen(4000,()=>console.log("listen on 4000 port"))