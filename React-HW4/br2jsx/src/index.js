import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
// import data from './components/data.json';
import AccountBlock from './components/br2'


let dataString = "первый<br>второй<br/>третий<br />последний";
// let columnName = data.columnName;
// let productsArr = data.productsArr;

ReactDOM.render(
  <AccountBlock
  dataString={dataString}
  // colName={columnName}
  // products= {productsArr}
  />
  ,document.getElementById('app') 
)



