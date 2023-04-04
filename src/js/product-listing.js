import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import {loadHeaderFooter, getParam} from "./utils.mjs";


const category = getParam("category")
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list")
const productList = new ProductList(category,dataSource,element);
productList.init()
// console.log(productList)
loadHeaderFooter()
