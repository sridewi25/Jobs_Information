const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'jobs';

const tokenGenerator = (data) => {
    const {id,name,email,username,country,gender} = data 
    return jwt.sign({
        id,name,email,username,country,gender
    },secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)

}

module.exports = {
    tokenGenerator,tokenVerifier
}