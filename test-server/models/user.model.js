import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tasks" }],
  },
  { timestamp: true }
);

export const User = mongoose.model("Users", userSchema);
