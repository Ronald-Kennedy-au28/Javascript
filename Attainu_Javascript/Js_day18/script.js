
// In this class we will be learning about ES6 modules
// Import and Export

import Cart from "./cart";  // i think this is default import
// i think in default we can change the import name as we'll
// like -- import Cart2 from "./cart"


import { Product,someVar } from "./product"; // this is named import
/// if we have same variables in two or more modules
// we can change by { somevar as varsome};

let cart = new Cart();
let item = new Product("sam",50);

