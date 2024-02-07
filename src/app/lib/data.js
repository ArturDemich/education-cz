import { connectToDB } from "./connectMongoDB";
import { Client } from "./models";

export async function fetchClients(params) {
    try {
        connectToDB()
        const data = await Client.find(params)
        const clients = JSON.parse(JSON.stringify(data))
        const reversClients = clients.reverse()
        return reversClients;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
