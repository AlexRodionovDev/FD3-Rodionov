import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import CommonBlock from './components/CommonBlock'


let caption1 = 'однажды';
let caption2 = 'пору';
let text = 'в студеную зимнюю';
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
 
ReactDOM.render(
  <CommonBlock caption1={caption1}
   caption2={caption2}
   colors = {colors}>
     {text}
  </CommonBlock>
  ,document.getElementById('app') 
)



