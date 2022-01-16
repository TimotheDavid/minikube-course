import { User } from '@prisma/client';
import People from '../../useCase/peoples';
import { Response , Request } from 'express';
import DBPeoples from '../../externals/db/peoples/peoples';



const peoples = new People(new DBPeoples());

export async function getPeoples(res: Response, req: Request ) : Promise<User[] | null> {
        return peoples.getPeoples()
    }

export  async function getOnePeople(req: Request, res: Response): Promise<User | null> {
            return peoples.getOnePeople(req.params.id)
    }

export async  function createPeoples(req: Request, res: Response): Promise<User | null> {
            return peoples.createPeoples(req.body.peoples);
    }


export async function updatePeople(req: Request, res: Response): Promise< User | null> {
        return peoples.updatePeople(req.params.id, req.body.peoples);
    }
    
export async function  deletePeople(req: Request, res: Response): Promise<User | undefined> {
            return peoples.deletePeople(req.params.id);
    }
