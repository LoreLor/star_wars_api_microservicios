const { Router } = require('express');

const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router();


router.get('/:model', middlewares.modelValidation, controllers.listController);
router.get('/:model/:id', middlewares.modelValidation, controllers.getIdController);
router.post('/:model', middlewares.modelValidation, controllers.insertController)



module.exports = router;