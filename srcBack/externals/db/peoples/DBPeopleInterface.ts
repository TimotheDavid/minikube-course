import { User } from "@prisma/client";
import { peopleDto } from "./peopleDto";

export default interface DBPeopleInterface {
    
    getPeoples(): Promise<User[] | null>
    getOnePeople(id: string): Promise<User | null>
    createPeople(people: peopleDto): Promise<User | null>
    updatePeople(id: string,people: peopleDto): Promise<User| null>
    deletePeople(id: string): Promise<User | undefined>
    
}