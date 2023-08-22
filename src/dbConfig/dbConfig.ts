import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection ;
        connection.on('connected',()=>{
            console.log('connected to database')
        });
        connection.on('error',(err)=>{
            console.log(`Couldnot connect to database ${err}`)
            process.exit();
        })
    }catch(error){
        console.log('Something went wrong')
        console.log(error)
    }
}