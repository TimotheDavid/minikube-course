import express from "express";
import asyncWrapper from "../wrapper";
import { createPeoples, deletePeople, getOnePeople, getPeoples, updatePeople } from ".";


const router = express.Router();

    router.get('', asyncWrapper(getPeoples));
    router.get('/:id', asyncWrapper(getOnePeople));
    router.post('', asyncWrapper(createPeoples));
    router.put('/:id', asyncWrapper(updatePeople));
    router.delete('/:id', asyncWrapper(deletePeople));


export default router;