const Router = require('express');
const controller = require('./authControlller');
const {check} = require("express-validator");

const router = new Router()

router.post('/register',[
    check('username', "Логін повинен складатися від 4 до 20 символів").isLength({min:4, max:20}),
    check('password', "Пароль повинен складатися від 4 до 20 символів").isLength({min:4, max:20})
], controller.registeration)
router.post('/login', controller.login)
router.get('/users', controller.getUser)

module.exports = router;