const express=require('express')
const app=express();
const cors=require('cors');
const todoRouter=require('./routes/todoRoutes');
const database=require('./config/database')
require('dotenv').config();

database.connect();

app.use(express.json());
app.use(cors({
  origin:"*",
  methods:["GET","PUT",'DELETE',"UPDATE","POST"],
  credentials:true
}));

app.use("/todo",todoRouter);


app.listen(process.env.PORT,()=>{
    console.log('app run')
})