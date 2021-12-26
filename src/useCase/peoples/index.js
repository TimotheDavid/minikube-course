const db = require('../../externals/db/peoples')

function getPeoples(res, req) {
        return db.getPeoples();
    }

function getOnePeoples(res, req) {
    return db.getOnePeople(req.params.id);
}

function createPeoples(res, req) {
        console.error('req ' + req);
    return db.createPeoples(req.body);
}

function updatePeople(res, req) {
    return db.updatePeople(res.body);
}

function deletePeople(res, req) {
    return db.deletePeople(req.params.id);
}

module.exports =  {
    getOnePeoples: getOnePeoples,
    getPeoples: getPeoples,
    createPeoples: createPeoples,
    updatePeople: updatePeople,
    deletePeople: deletePeople,
    }
