import mongoose from 'mongoose'


const connectToDatabase = async (): Promise<void> => {
    const DB_URI : any = process.env.DB_URI
    try {
        const db = await mongoose.connect(DB_URI)
        console.log("connected to db", db.connection.name)
    } catch (error) {
        console.log("error in connecting to DB", error)
    }
}

export default connectToDatabase