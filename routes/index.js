import {Router} from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = Router();

// check status and stats of db
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// user
router.post('/users', UsersController.postNew);

// connect to a user
router.get('/connect', AuthController.getConnect);
// get a particular user
router.get('/users/me', UsersController.getMe);

// disconnect from a user
router.get('/disconnect', AuthController.getDisconnect);


// Upload files
router.post('/files', FilesController.postUpload);
router.get('/files/:id', FilesController.getShow);
router.get('/files', FilesController.getIndex);

// publish and unpublish to a redis channel
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/unpublish', FilesController.putUnpublish);


// to get published files
router.get('/files/:id/data', FilesController.getFile);