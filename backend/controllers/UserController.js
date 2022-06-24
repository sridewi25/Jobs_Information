const {user} = require('../models');
const {decryptPassword} = require('../helpers/bcrypt')
const {tokenGenerator, tokenVerifier} = require('../helpers/jsonwebtoken')

class UserController{
    static async getAllUser(req,res){
        try {
            let users = await user.findAll();
            res.status(200).json(users)

        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }
    static async loginuser(req, res){
        try{
            const {username, password}=req.body
            let usernameFound = await user.findOne({
                where:{username}
            })
            
            if(usernameFound){
                if(decryptPassword(password, usernameFound.password)){
                    let access_token = tokenGenerator(usernameFound)
                    let verifyToken = tokenVerifier(access_token)
                    res.status(201).json(access_token)
                }
                else{
                    res.status(403).json({
                        message:"Invalid Password"
                    })
                }
            }
            else{
                res.status(404).json({message:"User Not Found"})
            }
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async createUser(req,res){
        try{
            const {name,email,username,password,country,gender} = req.body
            let users = await user.create({
                name,email,username,password,country,gender
            })
            res.status(201).json(users)
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }
    static async getInfoUser(req,res){
        try{
            const id = Number(req.userData.id)
            
            let users = [await user.findByPk(id)]
            res.status(200).json(users)
        }
        catch(err){
            res.status(500).json({message: err.message});
            
        }
    }
}

module.exports = UserController