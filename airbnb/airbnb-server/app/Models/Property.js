'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Property extends Model {

  // the user have a property
  user () {
    return this.belongsTo('App/Models/User')
  }

  // a property have many images
  images () {
    return this.hasMany('App/Models/Image')
  }
  
}

module.exports = Property
