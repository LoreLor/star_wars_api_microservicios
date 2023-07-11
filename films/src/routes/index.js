const { Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');


const router = Router();

router.get('/', controllers.getFilms);
router.get('/:id', controllers.getFilmById);
router.post('/', middlewares.filmsValidations, controllers.postFilms)


module.exports = router;