import { Schema, model } from "mongoose";

const userSchema = new Schema({
  profilePicture: {
    type: String,
    default:
      "src/assets/profiles/profilePicture-1692876385682-9423807defaultpp.png",
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },

});

const User = model("User", userSchema);
export default User;
