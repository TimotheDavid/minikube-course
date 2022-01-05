import { PrismaClient, User } from '@prisma/client';
import DBPeopleInterface from './DBPeopleInterface';
import { peopleDto } from './peopleDto';


export default class DBPeoples implements DBPeopleInterface {
    private readonly db: PrismaClient;
    constructor() {
        this.db = new PrismaClient(); 
        
    }

    async getPeoples(): Promise<User[]> {
        return this.db.user.findMany();
    }

    async getOnePeople(id: string) : Promise<User | null> {
        return this.db.user.findUnique({where: { id: parseInt(id)  }})
    }

    async createPeople(people: peopleDto): Promise<User | null> {
        return this.db.user.create({
                data: {
                name: people.name, 
                age: people.age,
                city: people.city
            }
        })
}
    async updatePeople(id: string,people: peopleDto): Promise<User| null> {
        return this.db.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name:people.name,
                age: people.age,
                city: people.city
            }
        })
    }

    async deletePeople(id: string): Promise<User | undefined> {
        return this.db.user.delete({
            where: {
                id: parseInt(id)
            }
        })
    }
}
