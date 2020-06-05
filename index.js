const express = require('express')
const morgan = require('morgan')

//create my application variable
const app = express();

app.use(morgan('dev'))
app.use(express.json())

const indexRoute = express.Router()


const indexRouteMiddleware2 = (request, response, nextFunction) => {
  console.log("I am second")
  nextFunction()
}

const indexRouteMiddleware = function(request, response, nextFunction) {
  console.info("I am first")
  return response.json("I am a string")

}

indexRoute.route("/").get(indexRouteMiddleware2, indexRouteMiddleware)

app.use('/apis',indexRoute)

app.listen(5000, ()=> {console.log("Server has started")})