import express from "express";
import connectToDatabase from "./configs/database";
import indexRoutes from "./routes/index-routes";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use("/src/assets", express.static("src/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRoutes);

// INDIAN_TV_CHANNELS_LIST.map((item)=>{
//   Channel.create({channelName : item})
// })

// GENRE.map((item)=>{
//   TvGenre.create({genre : item})
// })

connectToDatabase();
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
