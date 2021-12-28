const express = require('express');
import { Router } from 'express';
import   routing  from './peoples/router'
import { PeopleRoutingInterface } from './peoples/PeopleRoutingInterface';


const router = express.Router();


router.use('/peoples', routing);

export default router;