const express = require('express');
const asyncWrapper = require('../wrapper');
const peoples =  require('../../useCase/peoples');
const routes = express.Router();

routes.get('', asyncWrapper(peoples.getPeoples));
routes.get('/:id', asyncWrapper(peoples.getOnePeoples));
routes.post('', asyncWrapper(peoples.createPeoples));
routes.put('', asyncWrapper(peoples.updatePeople));
routes.delete('/:id', asyncWrapper(peoples.deletePeople));

module.exports =  routes;
