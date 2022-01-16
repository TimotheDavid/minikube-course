import { User } from "@prisma/client";
import { Response, Request } from "express";
import { peopleDto } from "../../externals/db/peoples/peopleDto";

export interface  peoplesInterface {

    getPeoples(): Promise< User[] | null>
    getOnePeople(id:string): Promise< User | null> 
    createPeoples(peoples: peopleDto): Promise<User | null>
    updatePeople(id: string, people: peopleDto): Promise<User | null>
    deletePeople(id: string): Promise<User | undefined>

}