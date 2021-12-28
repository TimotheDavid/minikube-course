import DBPeopleInterface from '../../externals/db/peoples/DBPeopleInterface';
import { peoplesInterface } from './peoplesInterface';
import { User } from '@prisma/client';
import { peopleDto } from '../../externals/db/peoples/peopleDto';


export default class People implements peoplesInterface {
    
    private db;
    constructor(
            dbInterface : DBPeopleInterface
        ){
            this.db = dbInterface;
        }
        
        async getPeoples(): Promise<User[] | null>  {            
            return this.db.getPeoples();
        }
        
        
        async getOnePeople(id: string): Promise< User | null>  {
            return this.db.getOnePeople(id);
        }
        
        async createPeoples(peoples: peopleDto): Promise<User | null> {
            return this.db.createPeople(peoples);
        }
        
        async   updatePeople(id: string, peoples: peopleDto): Promise<User | null> {
            return this.db.updatePeople(id,peoples);
        }
        
        async deletePeople(id:string): Promise<User | undefined> {
            return this.db.deletePeople(id);
        }
    }
