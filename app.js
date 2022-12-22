require('dotenv').config();
const express = require('express');

// APP Express
const app = express();
app.use(express.json());

// Todos
const { getTodos, postTodos } = require('./controllers/todos.controller');
app.route('/todos')
    .get(getTodos)
    .post(postTodos)

// Express in ascolto
app.listen(3000);

