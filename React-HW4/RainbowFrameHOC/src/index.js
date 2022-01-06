import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import ColorBlock from './components/ColorBlock'


let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let text = "Hello!";
// let productsArr = data.productsArr;

ReactDOM.render(
  <ColorBlock
  class='ColorBlock'
  colors={colors}
  text={text}
  />
  ,document.getElementById('app') 
)



