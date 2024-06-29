const mongoose=require('mongoose')
require('dotenv').config()
const url=process.env.MONGODB_URL;
exports.connect=async()=>{
    try {
        await mongoose.connect(url,{
            dbName:'Todo_List'
        })
        console.log('DB Connected Successfully')
    } catch (error) {
        console.log('Db connection fail')
    }
}