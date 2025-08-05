import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: number;
}

const UserSchema: Schema<User> = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<User>("User", UserSchema);
export default User;
