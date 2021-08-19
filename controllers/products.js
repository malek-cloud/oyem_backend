const mongoose = require('mongoose');
const Products = require("../models/product");
exports.getAddProduct = (req, res) => {
    res.render('admin/addProduct', {
        pageTitle: 'Add Product',
        path: 'add-products',
        editing: false,
    });
};
exports.postAddProduct = (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const product = new Products({ title: title, description: description, imageUrl: imageUrl });
    product.save().then(result => {
        res.redirect('/');
        console.log('save done');
    }).catch(err => {
        console.log(err);
    });
};


exports.getEditProduct = (req, res) => {
    console.log('bla bla bla');
    const editMode = req.query.edit;
    console.log(editMode);
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Products.findById(prodId).then(
        product => {
            res.render('admin/addProduct',
                {
                    pageTitle: "Modifier " + product.title,
                    prod: product,
                    editing: editMode,
                });
        }
    ).catch(err => {
        console.log(err);
    });

};
exports.postEditProduct = (req, res) => {
    const prodId =new mongoose.ObjectId(req.body.productId);
   // console.log('hedha id el update :' + prodId);
    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;
    const updatedImage = req.body.imageUrl;
    console.log("el id valid walle : "+ mongoose.Types.ObjectId.isValid(new mongoose.ObjectId(prodId)));
    Products.findById(new mongoose.ObjectId(prodId)).then(product => {
        product.title = updatedTitle;
        product.description = updatedDescription;
        product.imageUrl = updatedImageUrl;
        return product.save();
    }).then(resultat => {
       // console.log(updatedTitle);
        res.redirect('/');
    }).catch(err => { console.log(err) });


}

module.exports.getProducts = (req, res) => {
    Products.find().then(
        products => {
            res.render("client/showProducts", {
                pageTitle: "Accueil",
                path: '/',
                prods: products,
                hasProducts: products.length > 0,
            });
        }
    ).catch(
        err => { console.log(err); }
    );

};
exports.getProduct = (req, res) => {
    const prodId = req.params.productId;
    console.log('this is the id : ' + prodId);
    Products.findById(prodId).then(
        product => {
            res.render('client/detail-product',
                {
                    pageTitle: product.title,
                    prod: product,

                });
        }
    ).catch(err => {
        console.log(err);
    });

};
