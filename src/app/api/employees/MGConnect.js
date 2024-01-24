import mongoose from "mongoose";

export const empModel = mongoose.Schema({
  eid: String,
  ename: String,
  salary: Number,
});

export const Employee =
  mongoose.models.employees || mongoose.model("employees", empModel);
