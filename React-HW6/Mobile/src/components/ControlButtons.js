import React from 'react';
import PropTypes from 'prop-types';
import {btnClickEvents} from './events'

import '../styles/ControlButtons.css';


class ControlButtons extends React.PureComponent {

  btnAllClicked = (e) => {
    btnClickEvents.emit('btnAllClicked');
  }

  btnActiveClicked = (e) => {
    btnClickEvents.emit('btnActiveClicked');
  }

  btnBlockedClicked = (e) => {
    btnClickEvents.emit('btnBlockedClicked')
  }

  render() {
    console.log('рендер ControlButtons');
    return (
      <div className="ControlButtons">
        <input type="button" value="Все" onClick={this.btnAllClicked} />
        <input type="button" value="Активные" onClick={this.btnActiveClicked}/>
        <input type="button" value="Заблокированные" onClick={this.btnBlockedClicked}/>
      </div>
    )
    ;
  }
}

export default ControlButtons;