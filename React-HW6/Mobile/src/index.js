"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import data from './components/data.json'

import MobileBlock from './components/MobileBlock';


let colName = data.columnName;
let usersArr = data.usersArr;


ReactDOM.render(
  <MobileBlock 
  colName = {colName}
  usersArr = {usersArr}
  />
  , document.getElementById('app') 
);



