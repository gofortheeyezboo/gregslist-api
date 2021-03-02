import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
async find(query = {}){
    return await dbContext.Job.find(query)
}
async create(newJob){
    return await dbContext.Job.create(newJob)
}
async findById(id){
    const job = await dbContext.Job.findById(id)
    if (!job){
        throw new BadRequest("You Are A Fking Moron")
    }
}
async edit(id, body){
return await dbContext.Job.findByIdAndUpdate(id, body, { new: true })
}
async delete(id){
    return await dbContext.Job.findByIdAndDelete(id)
}
}
export const jobsService = new JobsService()