//admin related controllers code

const Product = require('../models/product.js') // importing product class

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProducts = (req, res, next) => {
    // products.push({ title: req.body.title });
    const title= req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
}

//will get the products if the url will be 'http://localhost:5000/admin/products'
exports.getProducts = (req, res, next) => {
    Product.fetchAll(
        //passing the callback function which will be exectued insinge the 'fetchAll() method'
        // You only need to use a callback if the code you're running after it depends on the asynchronous code finishing first.
        products => {
            res.render('admin/products.ejs', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products',

            });
        }
    );
}