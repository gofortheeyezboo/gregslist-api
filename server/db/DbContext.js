import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import HouseSchema from "../models/House"
import CarSchema from "../models/Car"
import JobSchema from "../models/Job"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Houses = mongoose.model("House", HouseSchema);
  Cars = mongoose.model("Cars", CarSchema);
  Job = mongoose.model("Jobs", JobSchema)
}

export const dbContext = new DbContext();
