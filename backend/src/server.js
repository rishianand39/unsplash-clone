const connect=require("./configs//db")
const app =require("./index")
require('dotenv').config()
const port=process.env.PORT || 6000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});