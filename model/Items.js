const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Please enter the Title"]
    },
    description:{
        type:String,
        required:[true,"Please Enter the Description"]
    },
    status:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports=mongoose.model("Items",itemSchema);