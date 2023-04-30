import express from "express";
import { deleteMessege, getMessege, getParam, getQuery, postMessege, putMessege } from '../controller/First.Controller.js';

const router = express.Router();

router.get('/', getMessege);

router.get('/param/:name', getParam);
router.get('/query/', getQuery);

router.post('/', postMessege);

router.put('/', putMessege);

router.delete('/', deleteMessege);

export default router;