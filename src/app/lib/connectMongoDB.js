import { MongoClient } from "mongodb";
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI
let client = null


export async function connectToDatabase() {
    if(client) {
        return client
    }

    if(!MONGODB_URI) {
        console.log('MongoDB URI not found!')
    }

    try {
        client = await MongoClient.connect(MONGODB_URI)
        console.log('Connect to MongoDB successfully!')
        return client
    } catch (error) {
        console.error('Error connecting to the MongoDB', error)
    }
}



const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log('Connect to MongoDB successfully!')
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};