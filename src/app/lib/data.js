import { connectToDB } from "./connectMongoDB";
import { Client } from "./models";

export async function fetchClients(params) {
    try {
        connectToDB()
        const data = await Client.find(params)
        const clients = JSON.parse(JSON.stringify(data))
        return clients;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
