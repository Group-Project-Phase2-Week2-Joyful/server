const { verifyToken } = require('../helpers/jwt')
const Todo = require('../models/Todo')

const authentication = (req, res, next) => {
  try {
      req.loggedUser = verifyToken(req.headers.access_token) //option expire
      console.log(req.loggedUser);
      next()
  } catch (err) {
    next(err)
  }
}

const authorization = (req, res, next) => {
  let { id } = req.params //id todo
  console.log(req.params);
  
  Todo.findById(id)
  .then(todo => {
    if (!todo) {
      next({status : 404, message : `to-do not found`})
    } else if (todo.userId == req.loggedUser.id) {
      
      next()
    } else {
      console.log(typeof todo.userId, todo.userId);
      console.log(typeof req.loggedUser.id, req.loggedUser.id);
      
      next({ status : 403, message : `not authorized`})
    }
  })
}

module.exports = {
  authentication,
  authorization
}