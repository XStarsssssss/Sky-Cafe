import { Router } from 'express';
import {homepageGetHandler} from './handler';
const router = Router();

router.get('/', homepageGetHandler);










export default router;