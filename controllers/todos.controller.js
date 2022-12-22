const { pb } = require("../db")

module.exports = {
    getTodos: async (req, res) => {
        try {
            const start = req.query.start || 1;
            const end = req.query.start || 50;

            const todos = await pb.collection('todos').getList(start, end);
            res.json(todos);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error.toString()
            })
        }
    },

    postTodos: async (req, res) => {
        try {
            const record = await pb.collection('todos').create(req.body);

            res.json(record);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error.toString()
            })
        }
    }
}