const User = require('./models/user');
const Role = require('./models/role')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const {secret} = require("./config")

const generateAccesToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    async login(req, res) {
        try {
          const { username, password } = req.body;
          const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Юзер не існує' });
            }
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Пароль не вірний' });
            }
            // res.status(200).json({ message: 'Вхід успішний' });
            const token = generateAccesToken(user._id, user.roles)
            return res.json({token})
        } catch (error) {

        }
    }

    async registeration(req, res) {
        try {
            const errors = validationResult(req);
            console.log(errors)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: errors.array()[0].msg });
            }
            const { username, password } = req.body;
            console.log(req.body);
            const candidate = await User.findOne({ username });
            if (candidate) {
                return res.status(401).json({ message: 'Юзер існує' });
            }
            const hashedPassword = bcrypt.hashSync(password, 12);
            const user = new User({ username, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: "Реєстрація успішна" });
        } catch (error) {
            res.status(400).json({ message: "Помилка реєстрації" });
            console.log(error);
        }
    }

    async getUser(req, res) {
        try {
  
        } catch (error) {
            // Обробка помилок
        }
    }
}

module.exports = new authController();
