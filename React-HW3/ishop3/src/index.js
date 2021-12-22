import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import data from './components/data.json';
import ShopBlock from './components/shop'


let storeName = data.storeName;
let columnName = data.columnName;
let productsArr = data.productsArr;

ReactDOM.render(
  <ShopBlock
  name={storeName}
  colName={columnName}
  products= {productsArr}
  />
  ,document.getElementById('app') 
)



