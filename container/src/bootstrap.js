//When webpack finds "productsApp/...", it will first try to find productsApp in node_modules. 
//If productsApp isn't in node_modules, it will then look at "productsApp" key-value pair in the Module Federation, and fetch the corresponding url. 
import 'productsApp/ProductsIndex';


console.log("container");
