import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {
async find(query = {}){
    return await dbContext.Houses.find(query)
}
async create(newHouse){
    return await dbContext.Houses.create(newHouse)
}
async findById(id){
    const house = await dbContext.Houses.findById(id)
    if (!house){
        throw new BadRequest("You Are A Fking Moron")
    }
}
async edit(id, body){
return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
}
async delete(id){
    return await dbContext.Houses.findByIdAndDelete(id)
}
}
export const housesService = new HousesService()