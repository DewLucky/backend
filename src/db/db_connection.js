import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDb = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`/n MongoDb connected!!, DB HOST: ${connectionInstance.connection.host}`);
    }

    catch(error){
        console.log("MongoDb connection FAILED: ", error);
        process.exit(1)
    }
}

export default connectionDb;

/*
ASSINGMENT:

1. Read about the object returned by mongoose, especially about the db host.

2. Read about the process.exit codes ie exit code 0, 1 and others.

*/