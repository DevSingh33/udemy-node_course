const fs = require('fs');
const path = require('path');

//'path.dirname...(i.e root directory), 'data' folder in which data will be saved, 'products.json' file in which data will be stored
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const products = [];

//helper function
//cb is the call back function passed to 'getProductsFromFile()' which need to be executed for the successfull exectuion of getProductsFromFile() function
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);  //we are making sure that the callback is executed
        } else {
            //if no error occur, content from the files(i.e product.json) will be passed to the site
            cb(JSON.parse(fileContent));

        }
    })
    return products;
}

//! NOTE: 'this' keyword will only work with arrow syntax, if it was used normally it have lost it's context 
/*
Since arrow functions cannot bind this , it looks up into its parent scope for a this it can use which in our case is the "save" method. Since we're calling the "save" method on an instance of the class,
 the arrow function will use that this since it's the nearest this it can resolve.
*/


module.exports = class Product {
    constructor(prdctTitle) {
        this.title = prdctTitle;
    }

    //saving the current 'product' object
    save() {
        // products.push(this);  //this refer to the object created from this class that will saved in our 'products' list
        getProductsFromFile(products => {
            products.push(this);
            //saving the pushed data into the file
            fs.writeFile(p, JSON.stringify(products), (error) => {  //we can only save JSON in files (cuz we definesd 'products.json') so we need to use 'stringify'
                console.log(error);
            });
        });

        //to save anything in file , first we need to read the file
        fs.readFile(p, (error, fileContent) => {

        });
    }

    ///[fetchAll] get all products without instantiating the class
    //cb is the call back function passed to 'fetchAll()' which will be executed after 'fetchAll()' gets completed
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}

