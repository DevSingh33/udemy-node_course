//all products related routes logic

const Product = require('../models/product.js') // importing product class


//will get the products if the url will be 'http://localhost:5000/products'
exports.getProducts = (req, res, next) => {
  Product.fetchAll(
    //passing the callback function which will be exectued insinge the 'fetchAll() method'
    // You only need to use a callback if the code you're running after it depends on the asynchronous code finishing first.
    products => {
      res.render('shop/product-list.ejs', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
   
      });
    }
  );
}
//will get the products if the url will be 'http://localhost:5000/'
//this will be the first page for the site  
exports.getIndex = (req, res, next) => {
  Product.fetchAll(
    //passing the callback function which will be exectued insinge the 'fetchAll() method'
    // You only need to use a callback if the code you're running after it depends on the asynchronous code finishing first.
    products => {
      res.render('shop/index.ejs', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      
      });
    }
  );
}  


exports.getCart = (rq,res,next)=>{
res.render(
  'shop/cart.ejs',{
  path :'/cart',
  pageTitle: 'Your Cart'
  }
);
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req,res,next)=>{
res.render('shop/checkout.ejs',{
path: '/checkout',
pageTitle:'Checkout'
})
}