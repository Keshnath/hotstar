import mongoose from "mongoose";
export interface ISport {
    sport : string,
    sportPoster : string
}
const sportSchema = new mongoose.Schema({
    sport : {
        type : String,
        required : true
    },
    sportPoster : {
        type : String,
        required : true
    }
})

export const Sport = mongoose.model('Sport',sportSchema)