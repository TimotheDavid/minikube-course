const express = require('express');

const routes = express.Router();

routes.get('', getPeoples);
routes.get('/:id', getOnePeoples);
routes.post('', createPeoples);
routes.put('', updatePeople);

module.exports =  routes;
