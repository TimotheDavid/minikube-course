import { User } from "@prisma/client";
import { Response, Request, Router  } from "express";
export interface PeopleRoutingInterface {
    getPeoples(res: Response, req: Request) : Promise<User[] | null>
    getOnePeople(res: Response, req: Request): Promise<User | null>
    createPeoples(res: Response, req: Request): Promise<User | null>
    updatePeople(res: Response, req: Request): Promise< User | null>
    deletePeople(res: Response, req: Request): Promise<User | undefined>
}
