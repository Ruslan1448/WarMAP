const Router = require('express');
const controller = require('./authControlller');


const router = new Router()

router.post('/register', controller.registeration)
router.post('/login', controller.login)
router.get('/users', controller.getUser)

module.exports = router;