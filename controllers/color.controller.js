module.exports={

    createColor:async (req, res) => {

        // const user = await fileService.insertUser(req.body);

        res.status(201).json(color);
    },

    getAllColors:  async (req,res) => {
        // const usersFromService = await fileService.getUsers();
        res.json(colorsFromService);
    },

}