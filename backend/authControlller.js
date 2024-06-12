class authController{
    async registeration(req, res){
        try {
            
        } catch (error) {
            
        }

    }

    async login(req, res){
        try {
            
        } catch (error) {
            
        }

    }

    async getUser(req, res){
        try {
            res.json("success")
            req.json("user");
        } catch (error) {
            
        }
        
    }
}

module.exports = new authController()