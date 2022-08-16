import express from 'express';
import UserController from '../controllers/UserController';
// intializing express router
const router = express.Router();

router.post('/user', UserController.addUser);
router.get('/user', UserController.listUser);
export default router;