const db = require('./connection');


async function getPeoples() {
    const users = await db().user.findMany();
    return users;
}

function getOnePeople(id) {
        const userId = parseInt(id);
        return db().user.findUnique({where: { id: userId }})
}

function createPeoples(peoples) {
        return db().user.create({
                data: {
                name: peoples.name, 
                age: peoples.age,
                city: peoples.city
            }
        })

}

function updatePeople(id, name, age, city) {
        return db().user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: name,
                age: age,
                city: city
            }
        })
    }

function deletePeople(id) {
        return db().user.delete({
            where: {
                id: id
            }
        })
    }

module.exports = {
    getOnePeople: getOnePeople,
    getPeoples: getPeoples,
    createPeoples: createPeoples,
    updatePeople: updatePeople,
    deletePeople: deletePeople,
    }