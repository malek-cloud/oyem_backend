const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const productSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  imageUrl : { 
    type : String,
  }
});
module.exports = mongoose.model('Product', productSchema); //connect the schema with a name




/* const getdb = require('../utils/database').getdb;
class Product {
  constructor(title, description, imageUrl, id) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id;
  } */

 /* save() {
    const db = getdb();
    let dbOp;
    if (this._id) {
      console.log('ena fel modif save taw ?');
      console.log( typeof(this._id));
      dbOp = db
        .collection('products')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set:this });
    } else {
      console.log('ena fi ajouter el produit');
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp 
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getdb();
    return db.collection('products').find().toArray().then(products => {
      // console.log(products);
      return products;
    }).catch(err => {
      console.log(err);
    });
  };

  static findById(prodId) {
    const db = getdb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

};

module.exports = Product;  */