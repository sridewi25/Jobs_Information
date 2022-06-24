const bcrypt = require('bcrypt');
const saltRound = 10;

const encryptPassword = data => {
    return bcrypt.hashSync(data, saltRound)
}

const decryptPassword = (data,hashPassword) => {
    return bcrypt.compareSync(data, hashPassword)
}

module.exports = {
    encryptPassword, decryptPassword
}