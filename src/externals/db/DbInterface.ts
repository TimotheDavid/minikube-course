import DBPeopleInterface from "./peoples/DBPeopleInterface";
import DBPeoples from "./peoples/peoples";


export interface DBInterface {
    peoples: DBPeopleInterface
}

export class DBFacade {
    peoples;
    constructor(){
        this.peoples = new DBPeoples();
    }

    


}