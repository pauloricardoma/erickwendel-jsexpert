const Base = require('./base/base')

class Car extends Base {
  constructor({ 
    id, 
    name, 
    releaseYear, 
    avalaible, 
    gasAvalaible,
  }) {
    super({ id, name })

    this.releaseYear = releaseYear 
    this.avalaible = avalaible 
    this.gasAvalaible = gasAvalaible
  }


  
}

module.exports = Car
