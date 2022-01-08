import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import AccountBlock from './components/br2'


let dataString = "первый<br>второй<br/>третий<br />последний";


ReactDOM.render(
  <AccountBlock
  dataString={dataString}

  />
  ,document.getElementById('app') 
)



