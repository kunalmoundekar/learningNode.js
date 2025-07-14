import express from 'express'

import { GenerateShortUrl } from '../controllers/urlController.js';
// import {UrlFeachController} from '../controllers/urlController.js'

  
const router = express.Router();

router.post('/url',GenerateShortUrl)
// router.get('/get',UrlFeachController)

export default router



