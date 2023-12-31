import mongoose from "mongoose";
const { Schema } = mongoose;
export interface IChannel {
  channelName: string;
  channelPoster: string;
}
const channelSchema = new Schema({
  channelName: {
    type: String,
    required: true,
  },
  channelPoster: {
    type: String,
    required: true,
  },
});

const Channel = mongoose.model("Channel", channelSchema);
export default Channel;
