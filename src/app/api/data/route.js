import { connectToDB } from "@/app/lib/connectMongoDB"
import { Client } from "@/app/lib/models"

export async function GET(req) {
    const { url } = req;
    const queryParam = url.includes('?') ? url.split('?')[1].split('=')[1] : null;
  
    try {
        connectToDB()
        const clients = queryParam ? await Client.find({status: queryParam}) : await Client.find()
        console.log('connectToDBGET', Boolean(queryParam)) 
        
        return new Response(JSON.stringify(clients), {
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json'
            }}) 
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch clients from DB!");
    }   
}

export async function POST(req, res) {
    const body = await req.json()
    //console.log("POST", body)
    const {name, surname, birthday, email, number, clientText} = body
    try {
        connectToDB()
        
        const newClient = new Client({
            name, 
            surname, 
            birthday, 
            email, 
            number, 
            clientText,            
            status:"new",
        })
        
        await newClient.save()

        return new Response(JSON.stringify(res), {status: 200}) 
    } catch (error) {
        console.log(error);
        throw new Error("Failed to POST to DB!");
    }   
}
