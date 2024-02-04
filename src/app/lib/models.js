import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        surname: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        birthday: {
            type: String,            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 5
        },
        number: {
            type: String,
            required: true,
            unique: true,            
        },
        clientText: {
            type: String
        },
        adminText: {
            type: String
        },
        status: {
            type: String
        },
    },
    { timestamps: true }
)
export const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);
